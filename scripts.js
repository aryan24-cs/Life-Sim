async function loadScenarios() {
    try {
        const response = await fetch('scenarios.json');
        if (!response.ok) throw new Error('Failed to fetch scenarios.json');
        const data = await response.json();
        const progressData = JSON.parse(localStorage.getItem('scenarioProgress') || '{}');
        return data.scenarios.map(scenario => ({
            ...scenario,
            progress: progressData[scenario.id]?.progress || 0,
            stars: progressData[scenario.id]?.stars || 0,
            status: (progressData[scenario.id]?.progress || 0) >= scenario.total ? 'Completed' : 'Incomplete'
        }));
    } catch (error) {
        console.error('Error loading scenarios:', error);
        return [];
    }
}

function saveProgress(scenarioId, progress, stars) {
    const progressData = JSON.parse(localStorage.getItem('scenarioProgress') || '{}');
    progressData[scenarioId] = { progress, stars };
    localStorage.setItem('scenarioProgress', JSON.stringify(progressData));
}

function loadProgress(scenarioId) {
    const progressData = JSON.parse(localStorage.getItem('scenarioProgress') || '{}');
    return progressData[scenarioId] || { progress: 0, stars: 0 };
}

// Index page logic
if (document.location.pathname.endsWith('index.html') || document.location.pathname === '/') {
    document.addEventListener('DOMContentLoaded', async () => {
        const scenarios = await loadScenarios();
        renderScenarios(scenarios);
        updateProgress(scenarios);

        const resetButton = document.getElementById('resetProgress');
        if (resetButton) {
            resetButton.addEventListener('click', () => {
                localStorage.removeItem('scenarioProgress');
                location.reload();
            });
        }

        setupSearch(scenarios);
    });

    function renderScenarios(scenarioList) {
        const grid = document.getElementById('scenarioGrid');
        if (!grid) {
            console.error('Scenario grid not found!');
            return;
        }
        grid.innerHTML = '';
        scenarioList.forEach((scenario, index) => {
            const card = document.createElement('div');
            card.className = 'scenario-card bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 cursor-pointer opacity-0 animate-fadeIn';
            card.style.animationDelay = `${0.9 + index * 0.3}s`;
            card.innerHTML = `
                <a href="scenario.html?id=${scenario.id}" class="block">
                    <div class="flex items-center gap-3 mb-4">
                        <span class="text-2xl">${scenario.icon || '⭐'}</span>
                        <h3 class="text-lg font-semibold text-gray-800">${scenario.title}</h3>
                    </div>
                    <p class="text-gray-600 text-sm mb-4 leading-relaxed">${scenario.description || 'No description'}</p>
                </a>
                <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center gap-2">
                        <div class="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div class="h-full bg-primary rounded-full" style="width: ${(scenario.progress / scenario.total) * 100}%"></div>
                        </div>
                        <span class="text-xs text-gray-500">${scenario.progress}/${scenario.total}</span>
                    </div>
                    <div class="flex items-center gap-1">
                        ${Array(5).fill().map((_, i) => `<i class="ri-star-${i < scenario.stars ? 'fill text-yellow-400' : 'line text-gray-300'} text-sm"></i>`).join('')}
                    </div>
                </div>
                <div class="flex justify-between items-center">
                    <div class="w-6 h-6 flex items-center justify-center">
                        <i class="ri-${scenario.status === 'Completed' ? 'trophy-fill text-yellow-500' : 'trophy-line text-gray-400'}"></i>
                    </div>
                    <span class="text-xs text-gray-500">${scenario.status}</span>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    function updateProgress(scenarios) {
        let totalStars = 0;
        let completedScenarios = 0;
        let unlockedTrophies = 0;

        scenarios.forEach(scenario => {
            totalStars += scenario.stars;
            if (scenario.status === 'Completed') {
                completedScenarios++;
                unlockedTrophies++;
            }
        });

        const animateNumber = (element, target, duration = 1500) => {
            if (!element) return;
            const start = parseInt(element.textContent) || 0;
            const increment = (target - start) / (duration / 16);
            let current = start;
            const update = () => {
                current += increment;
                element.textContent = Math.round(current);
                if ((increment > 0 && current < target) || (increment < 0 && current > target)) {
                    requestAnimationFrame(update);
                }
            };
            requestAnimationFrame(update);
        };

        animateNumber(document.getElementById('starsEarned'), totalStars);
        animateNumber(document.getElementById('scenariosCompleted'), completedScenarios);
        animateNumber(document.getElementById('trophiesUnlocked'), unlockedTrophies);

        const overallPercentage = (completedScenarios / scenarios.length) * 100;
        const progressBar = document.getElementById('overallProgress');
        if (progressBar) progressBar.style.width = `${overallPercentage}%`;
        const progressText = document.getElementById('progressText');
        if (progressText) progressText.textContent = `Overall Progress: ${Math.round(overallPercentage)}%`;
    }

    function setupSearch(scenarios) {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                const query = searchInput.value.toLowerCase();
                const filteredScenarios = scenarios.filter(scenario =>
                    scenario.title.toLowerCase().includes(query) ||
                    (scenario.description && scenario.description.toLowerCase().includes(query))
                );
                renderScenarios(filteredScenarios);
            });
        }
    }
}

// Scenario page logic
if (document.location.pathname.endsWith('scenario.html')) {
    document.addEventListener('DOMContentLoaded', async () => {
        // Add back button
        const backButton = document.createElement('button');
        backButton.id = 'backButton';
        backButton.className = 'bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mb-4';
        backButton.textContent = 'Back';
        backButton.addEventListener('click', () => window.history.back());
        document.querySelector('main').prepend(backButton);

        const urlParams = new URLSearchParams(window.location.search);
        const scenarioId = urlParams.get('id');
        if (!scenarioId) {
            document.querySelector('main').innerHTML = '<p class="text-red-500 text-center">No scenario selected.</p>';
            return;
        }

        const scenarios = await loadScenarios();
        const scenario = scenarios.find(s => s.id === parseInt(scenarioId));
        if (!scenario) {
            document.querySelector('main').innerHTML = '<p class="text-red-500 text-center">Scenario not found.</p>';
            return;
        }

        document.getElementById('scenarioIcon').textContent = scenario.icon || '⭐';
        document.getElementById('scenarioTitle').textContent = scenario.title;
        document.getElementById('scenarioDescription').textContent = scenario.description || 'No description';
        document.getElementById('scenarioStory').textContent = scenario.story || 'No story available';
        document.getElementById('scenarioProgress').style.width = `${(scenario.progress / scenario.total) * 100}%`;
        document.getElementById('progressText').textContent = scenario.progress > 0 ? `${scenario.progress}/${scenario.total}` : '';
        document.getElementById('scenarioStars').innerHTML = Array(5).fill().map((_, i) => 
            `<i class="ri-star-${i < scenario.stars ? 'fill text-yellow-400' : 'line text-gray-300'} text-sm"></i>`
        ).join('');
        const nextButton = document.getElementById('nextButton');
        if (nextButton) nextButton.href = `quiz.html?id=${scenarioId}`;
    });
}

// Quiz page logic
if (document.location.pathname.endsWith('quiz.html')) {
    document.addEventListener('DOMContentLoaded', async () => {
        // Add back button
        const backButton = document.createElement('button');
        backButton.id = 'backButton';
        backButton.className = 'bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mb-4';
        backButton.textContent = 'Back';
        backButton.addEventListener('click', () => window.history.back());
        document.querySelector('main').prepend(backButton);

        const urlParams = new URLSearchParams(window.location.search);
        const scenarioId = urlParams.get('id');
        if (!scenarioId) {
            document.getElementById('questionsContainer').innerHTML = '<p class="text-red-500 text-center">No scenario selected.</p>';
            return;
        }

        const scenarios = await loadScenarios();
        const scenario = scenarios.find(s => s.id === parseInt(scenarioId));
        if (!scenario || !scenario.questions || scenario.questions.length === 0) {
            document.getElementById('questionsContainer').innerHTML = '<p class="text-red-500 text-center">Scenario or questions not found.</p>';
            return;
        }

        document.getElementById('scenarioIcon').textContent = scenario.icon || '⭐';
        document.getElementById('scenarioTitle').textContent = scenario.title;
        document.getElementById('scenarioDescription').textContent = scenario.description || 'No description';
        document.getElementById('scenarioProgress').style.width = `${(scenario.progress / scenario.total) * 100}%`;
        document.getElementById('progressText').textContent = scenario.progress > 0 ? `${scenario.progress}/${scenario.total}` : '';
        document.getElementById('scenarioStars').innerHTML = Array(5).fill().map((_, i) => 
            `<i class="ri-star-${i < scenario.stars ? 'fill text-yellow-400' : 'line text-gray-300'} text-sm"></i>`
        ).join('');

        const questionsContainer = document.getElementById('questionsContainer');
        if (!questionsContainer) {
            console.error('Questions container not found!');
            return;
        }

        scenario.questions.forEach((question, index) => {
            if (!question.options || question.options.length === 0) {
                console.error(`Question ${index} has no options!`, question);
                return;
            }
            const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
            const questionCard = document.createElement('div');
            questionCard.className = 'question-card bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 opacity-0 animate-fadeIn';
            questionCard.style.animationDelay = `${0.6 + index * 0.2}s`;
            questionCard.innerHTML = `
                <h3 class="text-lg font-semibold text-gray-800 mb-4">${question.text}</h3>
                <div class="space-y-3">
                    ${shuffledOptions.map((option, optIndex) => `
                        <label class="block" data-original-index="${question.options.findIndex(opt => opt.text === option.text)}">
                            <input type="radio" name="question-${question.id}" value="${optIndex}" class="sr-only">
                            <div class="option-button bg-white/50 rounded-lg p-3 cursor-pointer transition-all duration-300">
                                ${option.text || 'No text'}
                            </div>
                        </label>
                    `).join('')}
                </div>
                <p class="feedback text-sm mt-3 hidden"></p>
            `;
            questionsContainer.appendChild(questionCard);
        });

        const optionButtons = document.querySelectorAll('.option-button');
        optionButtons.forEach(button => {
            button.addEventListener('click', () => {
                const input = button.previousElementSibling;
                if (input) input.checked = true;
                const questionCard = button.closest('.question-card');
                if (questionCard) {
                    questionCard.querySelectorAll('.option-button').forEach(btn => btn.classList.remove('selected'));
                    button.classList.add('selected');
                }
            });
        });

        const submitButton = document.getElementById('submitAnswers');
        if (!submitButton) {
            console.error('Submit button not found!');
            return;
        }
        submitButton.addEventListener('click', () => {
            console.log('Submit button clicked');
            let correctAnswers = 0;
            const totalQuestions = scenario.questions.length;
            const celebration = document.getElementById('celebration');

            if (!questionsContainer) {
                console.error('Questions container not found!');
                return;
            }

            questionsContainer.querySelectorAll('.question-card').forEach((card, index) => {
                const selected = card.querySelector('input:checked');
                const feedback = card.querySelector('.feedback');
                if (!feedback) {
                    console.error('Feedback element not found for question:', index);
                    return;
                }

                if (selected) {
                    const optionIndex = parseInt(selected.value);
                    const optionLabel = card.querySelectorAll('label')[optionIndex];
                    if (optionLabel) {
                        const originalIndex = parseInt(optionLabel.getAttribute('data-original-index'));
                        const question = scenario.questions[index];
                        if (question && question.options && originalIndex >= 0 && originalIndex < question.options.length) {
                            const isCorrect = question.options[originalIndex].isCorrect;
                            feedback.classList.remove('hidden');
                            feedback.classList.toggle('text-green-500', isCorrect);
                            feedback.classList.toggle('text-red-500', !isCorrect);
                            if (isCorrect) {
                                feedback.textContent = `Correct! ${question.options[originalIndex].explanation || 'No explanation.'}`;
                                correctAnswers++;
                            } else {
                                const correctOption = question.options.find(opt => opt.isCorrect);
                                feedback.textContent = `Incorrect. The correct answer is: ${correctOption ? correctOption.text : 'Unknown'}. ${correctOption ? correctOption.explanation || 'No explanation.' : 'No correct option found.'}`;
                            }
                            card.querySelectorAll('.option-button').forEach((btn, btnIndex) => {
                                const btnOriginalIndex = parseInt(card.querySelectorAll('label')[btnIndex].getAttribute('data-original-index'));
                                if (btnOriginalIndex !== -1) {
                                    btn.classList.toggle('correct', question.options[btnOriginalIndex].isCorrect);
                                    btn.classList.toggle('incorrect', !question.options[btnOriginalIndex].isCorrect && btnIndex === optionIndex);
                                }
                            });
                        } else {
                            console.error(`Invalid original index or question data for question ${index}:`, { originalIndex, question });
                            feedback.classList.remove('hidden');
                            feedback.classList.add('text-red-500');
                            feedback.textContent = 'Error: Option data mismatch.';
                        }
                    } else {
                        console.error(`Option label not found for index ${optionIndex} in question ${index}`);
                        feedback.classList.remove('hidden');
                        feedback.classList.add('text-red-500');
                        feedback.textContent = 'Error: Option selection invalid.';
                    }
                } else {
                    feedback.classList.remove('hidden');
                    feedback.classList.add('text-red-500');
                    feedback.textContent = 'Please select an option.';
                }
            });

            const newProgress = Math.min(scenario.total, scenario.progress + correctAnswers);
            const newStars = Math.min(5, Math.floor((newProgress / scenario.total) * 5));
            saveProgress(scenarioId, newProgress, newStars);

            document.getElementById('scenarioProgress').style.width = `${(newProgress / scenario.total) * 100}%`;
            document.getElementById('progressText').textContent = newProgress > 0 ? `${newProgress}/${scenario.total}` : '';
            document.getElementById('scenarioStars').innerHTML = Array(5).fill().map((_, i) => 
                `<i class="ri-star-${i < newStars ? 'fill text-yellow-400' : 'line text-gray-300'} text-sm"></i>`
            ).join('');

            if (celebration) {
                celebration.classList.add('show');
                if (newProgress >= scenario.total) {
                    for (let i = 0; i < 20; i++) {
                        const cracker = document.createElement('div');
                        cracker.className = 'cracker';
                        cracker.style.left = `${Math.random() * 100}%`;
                        cracker.style.top = `${Math.random() * 50}%`;
                        cracker.style.animationDelay = `${Math.random() * 0.5}s`;
                        celebration.appendChild(cracker);
                        setTimeout(() => cracker.remove(), 1500);
                    }
                    const congrats = document.createElement('p');
                    congrats.textContent = 'Congratulations! You’ve mastered this scenario!';
                    congrats.className = 'text-green-500 text-xl font-bold mt-4';
                    celebration.appendChild(congrats);
                } else {
                    const feedbackMsg = document.createElement('p');
                    feedbackMsg.textContent = 'Some answers were incorrect. Please try again!';
                    feedbackMsg.className = 'text-red-500 text-lg mt-4';
                    celebration.appendChild(feedbackMsg);
                }
                setTimeout(() => celebration.classList.remove('show'), 3000);
            } else {
                console.error('Celebration div not found!');
            }
        });
    });
}