const scenarios = [
    // Ages 15–18: Focus on school, peer dynamics, and basic life skills
    {
        id: 1,
        title: "Handling Peer Pressure 🎉",
        ageGroup: "15-18",
        story: "You're studying for a crucial exam, but friends are throwing a party. 🎈 They say, 'Study later!' but the exam is key to your grades. Balancing social life and duties is tough! 😎",
        image: "peer-pressure-placeholder.png",
        video: "peer-pressure-video-placeholder.mp4",
        questions: [
            { text: "Should you go to the party?", choices: [
                { text: "No, prioritize studying.", outcome: "You aced it! 🥳", correct: true, explanation: "Studies ensure academic success." },
                { text: "Yes, go party.", outcome: "You failed the exam. 😔", correct: false, explanation: "Partying harms grades." }
            ]},
            { text: "How to say no to friends?", choices: [
                { text: "Explain you need to study.", outcome: "Friends respect you! 🌟", correct: true, explanation: "Honesty maintains bonds." },
                { text: "Ignore them.", outcome: "Friends feel hurt. 😞", correct: false, explanation: "Ignoring damages relationships." }
            ]},
            { text: "Can you study with friends?", choices: [
                { text: "Yes, if focused.", outcome: "Group study works! 🎉", correct: true, explanation: "Focused groups boost learning." },
                { text: "No, study alone.", outcome: "Missed collaboration. 😔", correct: false, explanation: "Groups can enhance learning." }
            ]},
            { text: "How to manage peer pressure?", choices: [
                { text: "Set clear boundaries.", outcome: "You stay in control! 🌟", correct: true, explanation: "Boundaries protect goals." },
                { text: "Give in to pressure.", outcome: "You lose focus. 😞", correct: false, explanation: "Giving in harms priorities." }
            ]},
            { text: "Can you compromise?", choices: [
                { text: "Study first, party later.", outcome: "Perfect balance! 🎉", correct: true, explanation: "Balance is key." },
                { text: "Skip studying.", outcome: "You regret it. 😔", correct: false, explanation: "Skipping work hurts goals." }
            ]},
            { text: "How to stay motivated?", choices: [
                { text: "Focus on your goals.", outcome: "You stay driven! 🌟", correct: true, explanation: "Goals keep you focused." },
                { text: "Follow the crowd.", outcome: "You lose direction. 😞", correct: false, explanation: "Crowds distract from goals." }
            ]},
            { text: "Should you explain your choice?", choices: [
                { text: "Yes, be open.", outcome: "Friends understand! 🎉", correct: true, explanation: "Communication builds trust." },
                { text: "No, stay silent.", outcome: "Friends feel ignored. 😔", correct: false, explanation: "Silence causes misunderstandings." }
            ]},
            { text: "Handle persistent friends?", choices: [
                { text: "Firmly say no.", outcome: "They respect you! 🌟", correct: true, explanation: "Firmness shows confidence." },
                { text: "Give in.", outcome: "You regret it. 😞", correct: false, explanation: "Giving in undermines priorities." }
            ]},
            { text: "Reward yourself?", choices: [
                { text: "Yes, after studying.", outcome: "You stay motivated! 🎉", correct: true, explanation: "Rewards boost productivity." },
                { text: "No rewards.", outcome: "You feel burned out. 😔", correct: false, explanation: "Rewards maintain motivation." }
            ]},
            { text: "What’s the long-term benefit?", choices: [
                { text: "Better grades.", outcome: "Grades open doors! 🌟", correct: true, explanation: "Good grades improve opportunities." },
                { text: "More parties.", outcome: "Missed career goals. 😞", correct: false, explanation: "Parties don’t build futures." }
            ]}
        ]
    },
    {
        id: 2,
        title: "Managing Time for School 📚",
        ageGroup: "15-18",
        story: "You have a big project due, but you’re juggling sports and social plans. 🏀 Your grades depend on finishing this project, but distractions are everywhere. How do you stay on track? ⏰",
        image: "time-management-placeholder.png",
        video: "time-management-video-placeholder.mp4",
        questions: [
            { text: "What’s the first step to manage time?", choices: [
                { text: "Make a schedule.", outcome: "Great start! 🎉", correct: true, explanation: "A schedule organizes tasks." },
                { text: "Work without a plan.", outcome: "You’re overwhelmed. 😔", correct: false, explanation: "Planning prevents chaos." }
            ]},
            { text: "Should you prioritize tasks?", choices: [
                { text: "Yes, focus on the project.", outcome: "Smart choice! 🌟", correct: true, explanation: "Prioritizing ensures deadlines are met." },
                { text: "Do everything at once.", outcome: "You miss the deadline. 😞", correct: false, explanation: "Multitasking reduces efficiency." }
            ]},
            { text: "How to avoid distractions?", choices: [
                { text: "Turn off notifications.", outcome: "You stay focused! 🎉", correct: true, explanation: "Eliminating distractions boosts productivity." },
                { text: "Keep checking your phone.", outcome: "You waste time. 😔", correct: false, explanation: "Phones disrupt focus." }
            ]},
            { text: "Break time needed?", choices: [
                { text: "Yes, short breaks help.", outcome: "Refreshed and productive! 🌟", correct: true, explanation: "Breaks prevent burnout." },
                { text: "Work non-stop.", outcome: "You burn out. 😞", correct: false, explanation: "No breaks reduce efficiency." }
            ]},
            { text: "How to track progress?", choices: [
                { text: "Use a checklist.", outcome: "You stay on track! 🎉", correct: true, explanation: "Checklists show progress." },
                { text: "Guess your progress.", outcome: "You miss tasks. 😔", correct: false, explanation: "Guessing leads to errors." }
            ]},
            { text: "Should you ask for help?", choices: [
                { text: "Yes, from teachers.", outcome: "Help boosts success! 🌟", correct: true, explanation: "Teachers clarify doubts." },
                { text: "No, do it alone.", outcome: "You struggle. 😞", correct: false, explanation: "Help saves time." }
            ]},
            { text: "Handle tight deadlines?", choices: [
                { text: "Break tasks into steps.", outcome: "Manageable workload! 🎉", correct: true, explanation: "Small steps make tasks easier." },
                { text: "Cram at the last minute.", outcome: "Poor quality work. 😔", correct: false, explanation: "Cramming reduces quality." }
            ]},
            { text: "Balance sports and study?", choices: [
                { text: "Set specific times.", outcome: "Balanced schedule! 🌟", correct: true, explanation: "Time slots ensure balance." },
                { text: "Skip sports.", outcome: "You feel stressed. 😞", correct: false, explanation: "Balance supports health." }
            ]},
            { text: "Track time spent?", choices: [
                { text: "Use a timer app.", outcome: "Efficient time use! 🎉", correct: true, explanation: "Timers improve focus." },
                { text: "Don’t track time.", outcome: "You lose track. 😔", correct: false, explanation: "Tracking optimizes time." }
            ]},
            { text: "Reward finishing tasks?", choices: [
                { text: "Yes, small rewards.", outcome: "Motivation boosts! 🌟", correct: true, explanation: "Rewards encourage progress." },
                { text: "No rewards.", outcome: "You lose motivation. 😞", correct: false, explanation: "Rewards sustain effort." }
            ]}
        ]
    },
    {
        id: 3,
        title: "Dealing with Bullying 😔",
        ageGroup: "15-18",
        story: "A classmate is spreading rumors about you at school. 😣 It’s affecting your confidence and focus. You want to address it without making things worse. How do you handle it? 🤝",
        image: "bullying-placeholder.png",
        video: "bullying-video-placeholder.mp4",
        questions: [
            { text: "What’s the first step?", choices: [
                { text: "Talk to a trusted adult.", outcome: "Good choice! 🎉", correct: true, explanation: "Adults provide support." },
                { text: "Confront the bully.", outcome: "Risky move. 😔", correct: false, explanation: "Confrontation can escalate." }
            ]},
            { text: "Should you respond to rumors?", choices: [
                { text: "No, stay calm.", outcome: "You avoid drama! 🌟", correct: true, explanation: "Ignoring rumors reduces their impact." },
                { text: "Argue back.", outcome: "Rumors spread more. 😞", correct: false, explanation: "Arguing fuels conflict." }
            ]},
            { text: "Document incidents?", choices: [
                { text: "Yes, keep a record.", outcome: "Smart evidence! 🎉", correct: true, explanation: "Records help adults act." },
                { text: "No, ignore it.", outcome: "No proof to act. 😔", correct: false, explanation: "Records support your case." }
            ]},
            { text: "Talk to the bully?", choices: [
                { text: "Only with an adult.", outcome: "Safe approach! 🌟", correct: true, explanation: "Mediation prevents escalation." },
                { text: "Alone.", outcome: "Risky confrontation. 😞", correct: false, explanation: "Alone talks can worsen things." }
            ]},
            { text: "Build confidence?", choices: [
                { text: "Join supportive groups.", outcome: "You feel stronger! 🎉", correct: true, explanation: "Groups boost confidence." },
                { text: "Isolate yourself.", outcome: "You feel worse. 😔", correct: false, explanation: "Isolation harms confidence." }
            ]},
            { text: "Report anonymously?", choices: [
                { text: "Yes, if available.", outcome: "Safe reporting! 🌟", correct: true, explanation: "Anonymous reports protect you." },
                { text: "No, stay silent.", outcome: "Bullying continues. 😞", correct: false, explanation: "Reporting stops bullying." }
            ]},
            { text: "Involve friends?", choices: [
                { text: "Yes, for support.", outcome: "You feel supported! 🎉", correct: true, explanation: "Friends provide emotional support." },
                { text: "No, handle alone.", outcome: "You feel alone. 😔", correct: false, explanation: "Support strengthens you." }
            ]},
            { text: "Use social media?", choices: [
                { text: "No, keep it private.", outcome: "Wise choice! 🌟", correct: true, explanation: "Privacy prevents escalation." },
                { text: "Post about it.", outcome: "Drama increases. 😞", correct: false, explanation: "Social media fuels conflict." }
            ]},
            { text: "Learn assertiveness?", choices: [
                { text: "Yes, practice it.", outcome: "You stand strong! 🎉", correct: true, explanation: "Assertiveness deters bullies." },
                { text: "Stay passive.", outcome: "Bullying persists. 😔", correct: false, explanation: "Passivity encourages bullies." }
            ]},
            { text: "Long-term goal?", choices: [
                { text: "Build resilience.", outcome: "You’re unstoppable! 🌟", correct: true, explanation: "Resilience overcomes challenges." },
                { text: "Avoid school.", outcome: "You miss opportunities. 😞", correct: false, explanation: "Avoidance limits growth." }
            ]}
        ]
    },
    // Ages 18–20: Focus on transitioning to independence, college, and basic finances
    {
        id: 4,
        title: "Managing a Monthly Budget 💸",
        ageGroup: "18-20",
        story: "You're a college student with $600 for the month. Rent is $350, groceries cost $150, and friends invite you to a $100 concert. You need to save for textbooks. 📚 Balancing needs and wants is tough!",
        image: "budget-placeholder.png",
        video: "budget-video-placeholder.mp4",
        questions: [
            { text: "What should you prioritize?", choices: [
                { text: "Pay rent and groceries.", outcome: "Great choice! 🎉", correct: true, explanation: "Essentials ensure stability." },
                { text: "Go to the concert.", outcome: "You went hungry. 😔", correct: false, explanation: "Food is essential." }
            ]},
            { text: "How much to save monthly?", choices: [
                { text: "Save $100.", outcome: "Smart! 🌟", correct: true, explanation: "Saving builds security." },
                { text: "Spend all.", outcome: "No savings left. 😞", correct: false, explanation: "Savings are crucial." }
            ]},
            { text: "Should you borrow for the concert?", choices: [
                { text: "No, avoid debt.", outcome: "Wise! 🎉", correct: true, explanation: "Debt adds stress." },
                { text: "Borrow $100.", outcome: "Debt piles up. 😔", correct: false, explanation: "Borrowing is risky." }
            ]},
            { text: "How to track expenses?", choices: [
                { text: "Use a budgeting app.", outcome: "Great! 🌟", correct: true, explanation: "Apps help control spending." },
                { text: "Don’t track.", outcome: "You overspent. 😞", correct: false, explanation: "Tracking prevents overspending." }
            ]},
            { text: "Buy used textbooks?", choices: [
                { text: "Yes, save money.", outcome: "Smart move! 🎉", correct: true, explanation: "Used books save cash." },
                { text: "No, buy new.", outcome: "You spent more. 😔", correct: false, explanation: "New books are costly." }
            ]},
            { text: "Savings goal?", choices: [
                { text: "10-20% of income.", outcome: "Perfect! 🌟", correct: true, explanation: "Sustainable saving." },
                { text: "None.", outcome: "No security. 😞", correct: false, explanation: "Saving is essential." }
            ]},
            { text: "Eat out often?", choices: [
                { text: "No, cook at home.", outcome: "You saved! 🎉", correct: true, explanation: "Cooking saves money." },
                { text: "Yes, eat out.", outcome: "Budget strained. 😔", correct: false, explanation: "Eating out drains funds." }
            ]},
            { text: "Handle unexpected costs?", choices: [
                { text: "Use savings.", outcome: "Good plan! 🌟", correct: true, explanation: "Savings handle emergencies." },
                { text: "Use credit card.", outcome: "Debt adds stress. 😔", correct: false, explanation: "Credit cards lead to debt." }
            ]},
            { text: "Set financial goals?", choices: [
                { text: "Yes, plan ahead.", outcome: "Awesome! 🎉", correct: true, explanation: "Goals guide success." },
                { text: "No, live day-to-day.", outcome: "Missed opportunities. 😞", correct: false, explanation: "Planning ensures progress." }
            ]},
            { text: "Priority after rent?", choices: [
                { text: "Groceries.", outcome: "Correct! 🌟", correct: true, explanation: "Food ensures health." },
                { text: "Entertainment.", outcome: "Neglected necessities. 😔", correct: false, explanation: "Essentials come first." }
            ]}
        ]
    },
    {
        id: 5,
        title: "Choosing a College Major 🎓",
        ageGroup: "18-20",
        story: "You’re starting college and need to pick a major. 🤔 Your parents want you to study engineering, but you love art. Balancing passion and practicality is tough! 🎨",
        image: "college-major-placeholder.png",
        video: "college-major-video-placeholder.mp4",
        questions: [
            { text: "How to choose a major?", choices: [
                { text: "Explore your interests.", outcome: "You find passion! 🎉", correct: true, explanation: "Interests guide fulfilling choices." },
                { text: "Follow parents’ advice.", outcome: "You feel unfulfilled. 😔", correct: false, explanation: "Ignoring passion leads to regret." }
            ]},
            { text: "Research job prospects?", choices: [
                { text: "Yes, check careers.", outcome: "Smart planning! 🌟", correct: true, explanation: "Research ensures viability." },
                { text: "No, just pick.", outcome: "Risky choice. 😞", correct: false, explanation: "Uninformed choices limit opportunities." }
            ]},
            { text: "Talk to advisors?", choices: [
                { text: "Yes, get guidance.", outcome: "Informed decision! 🎉", correct: true, explanation: "Advisors clarify options." },
                { text: "No, decide alone.", outcome: "You miss insights. 😔", correct: false, explanation: "Advisors provide perspective." }
            ]},
            { text: "Consider double major?", choices: [
                { text: "Yes, balance interests.", outcome: "Great flexibility! 🌟", correct: true, explanation: "Double majors blend passion and practicality." },
                { text: "No, pick one.", outcome: "Limited options. 😞", correct: false, explanation: "Flexibility opens doors." }
            ]},
            { text: "Try courses first?", choices: [
                { text: "Yes, test interests.", outcome: "You confirm your choice! 🎉", correct: true, explanation: "Testing courses prevents mistakes." },
                { text: "No, commit now.", outcome: "You regret it. 😔", correct: false, explanation: "Testing reduces risk." }
            ]},
            { text: "Factor in job market?", choices: [
                { text: "Yes, check demand.", outcome: "Practical choice! 🌟", correct: true, explanation: "Market demand ensures jobs." },
                { text: "No, ignore it.", outcome: "Harder to find work. 😞", correct: false, explanation: "Ignoring the market risks unemployment." }
            ]},
            { text: "Follow your passion?", choices: [
                { text: "Yes, within reason.", outcome: "You’re fulfilled! 🎉", correct: true, explanation: "Passion with planning works." },
                { text: "No, only practical.", outcome: "You feel trapped. 😔", correct: false, explanation: "Ignoring passion reduces happiness." }
            ]},
            { text: "Talk to professionals?", choices: [
                { text: "Yes, gain insights.", outcome: "Valuable advice! 🌟", correct: true, explanation: "Professionals share real-world experience." },
                { text: "No, skip it.", outcome: "Missed insights. 😞", correct: false, explanation: "Professionals guide decisions." }
            ]},
            { text: "Consider future goals?", choices: [
                { text: "Yes, align with career.", outcome: "You’re on track! 🎉", correct: true, explanation: "Goals shape your major." },
                { text: "No, pick randomly.", outcome: "You feel lost. 😔", correct: false, explanation: "Goals provide direction." }
            ]},
            { text: "Change majors later?", choices: [
                { text: "Yes, if needed.", outcome: "Flexible mindset! 🌟", correct: true, explanation: "Flexibility allows growth." },
                { text: "No, stick with one.", outcome: "You feel stuck. 😞", correct: false, explanation: "Changing majors is okay." }
            ]}
        ]
    },
    // Ages 21–25: Focus on career entry, financial independence, and relationships
    {
        id: 6,
        title: "Navigating a Job Interview 💼",
        ageGroup: "21-25",
        story: "You’ve landed an interview for your dream job! 🎉 It’s tomorrow, and preparation is key. You need to make a great impression. 😊",
        image: "job-interview-placeholder.png",
        video: "job-interview-video-placeholder.mp4",
        questions: [
            { text: "How to prepare?", choices: [
                { text: "Research the company.", outcome: "Impressive prep! 🌟", correct: true, explanation: "Research shows interest." },
                { text: "Wing it.", outcome: "You stumbled. 😔", correct: false, explanation: "Preparation is key." }
            ]},
            { text: "What to wear?", choices: [
                { text: "Professional attire.", outcome: "Great impression! 🎉", correct: true, explanation: "Professional attire sets the tone." },
                { text: "Casual clothes.", outcome: "Unprofessional look. 😞", correct: false, explanation: "Casual attire harms impressions." }
            ]},
            { text: "Arrive when?", choices: [
                { text: "10 minutes early.", outcome: "Perfect timing! 🌟", correct: true, explanation: "Early arrival shows punctuality." },
                { text: "Right on time.", outcome: "Risky if delayed. 😔", correct: false, explanation: "Early is better." }
            ]},
            { text: "Bring a resume?", choices: [
                { text: "Yes, bring copies.", outcome: "Prepared and professional! 🎉", correct: true, explanation: "Resumes show preparedness." },
                { text: "No, they have it.", outcome: "Missed an opportunity. 😞", correct: false, explanation: "Resumes reinforce your profile." }
            ]},
            { text: "How to answer questions?", choices: [
                { text: "Be concise and honest.", outcome: "Clear and trustworthy! 🌟", correct: true, explanation: "Clarity builds trust." },
                { text: "Exaggerate skills.", outcome: "They see through it. 😔", correct: false, explanation: "Honesty is best." }
            ]},
            { text: "Ask questions?", choices: [
                { text: "Yes, show interest.", outcome: "Engaged and curious! 🎉", correct: true, explanation: "Questions show enthusiasm." },
                { text: "No, stay quiet.", outcome: "Seems disinterested. 😞", correct: false, explanation: "Questions demonstrate engagement." }
            ]},
            { text: "Body language?", choices: [
                { text: "Maintain eye contact.", outcome: "Confident and engaged! 🌟", correct: true, explanation: "Eye contact shows confidence." },
                { text: "Look away often.", outcome: "Seems nervous. 😔", correct: false, explanation: "Poor eye contact seems unconfident." }
            ]},
            { text: "Follow up after?", choices: [
                { text: "Send a thank-you note.", outcome: "Professional touch! 🎉", correct: true, explanation: "Thank-you notes reinforce interest." },
                { text: "Do nothing.", outcome: "Missed a chance. 😞", correct: false, explanation: "Follow-ups show professionalism." }
            ]},
            { text: "Handle tough questions?", choices: [
                { text: "Stay calm and think.", outcome: "Handled well! 🌟", correct: true, explanation: "Calm responses impress." },
                { text: "Panic and ramble.", outcome: "Seems unprepared. 😔", correct: false, explanation: "Panicking hurts your image." }
            ]},
            { text: "Research salary?", choices: [
                { text: "Yes, know your worth.", outcome: "Smart negotiation! 🎉", correct: true, explanation: "Research aids negotiation." },
                { text: "No, accept any offer.", outcome: "Undervalued yourself. 😞", correct: false, explanation: "Research ensures fair pay." }
            ]}
        ]
    },
    {
        id: 7,
        title: "Dealing with a Car Breakdown 🚗",
        ageGroup: "21-25",
        story: "You're driving when your car suddenly breaks down on a quiet road. 🚨 It’s getting dark, and you need to get help. Knowing what to do can keep you safe! 😊",
        image: "car-breakdown-placeholder.png",
        video: "car-breakdown-video-placeholder.mp4",
        questions: [
            { text: "First action?", choices: [
                { text: "Turn on hazard lights.", outcome: "Good! You’re visible. 🎉", correct: true, explanation: "Hazard lights alert other drivers." },
                { text: "Leave the car running.", outcome: "Risky and wasteful. 😔", correct: false, explanation: "Turn off the engine for safety." }
            ]},
            { text: "Where to move the car?", choices: [
                { text: "To the side of the road.", outcome: "Safe choice! 🌟", correct: true, explanation: "Moving off the road prevents accidents." },
                { text: "Leave it in the middle.", outcome: "Dangerous for traffic. 😞", correct: false, explanation: "Blocking traffic is unsafe." }
            ]},
            { text: "Who to call?", choices: [
                { text: "Roadside assistance.", outcome: "Smart move! 🎉", correct: true, explanation: "Professionals can help safely." },
                { text: "A random friend.", outcome: "They may not be equipped. 😔", correct: false, explanation: "Professionals are better for car issues." }
            ]},
            { text: "Stay in the car?", choices: [
                { text: "No, stand safely away.", outcome: "Good! You’re safe. 🌟", correct: true, explanation: "Standing away avoids traffic risks." },
                { text: "Stay inside.", outcome: "Risky if traffic is heavy. 😞", correct: false, explanation: "Standing outside is safer." }
            ]},
            { text: "Use warning triangles?", choices: [
                { text: "Yes, place them.", outcome: "Great for visibility! 🎉", correct: true, explanation: "Triangles warn other drivers." },
                { text: "No, skip them.", outcome: "Less visibility. 😔", correct: false, explanation: "Triangles enhance safety." }
            ]},
            { text: "Check the issue?", choices: [
                { text: "Only if safe and capable.", outcome: "Wise choice! 🌟", correct: true, explanation: "Only check if you know how." },
                { text: "Always check.", outcome: "Risky without knowledge. 😞", correct: false, explanation: "Unsafe checks can worsen issues." }
            ]},
            { text: "Battery dead?", choices: [
                { text: "Use jumper cables safely.", outcome: "Good plan! 🎉", correct: true, explanation: "Correct jumping starts the car." },
                { text: "Keep trying to start.", outcome: "Damages the battery. 😔", correct: false, explanation: "Repeated attempts harm the battery." }
            ]},
            { text: "Tire flat?", choices: [
                { text: "Replace with spare.", outcome: "You’re back on track! 🌟", correct: true, explanation: "Spare tires are for emergencies." },
                { text: "Drive on it.", outcome: "Damages the wheel. 😞", correct: false, explanation: "Driving on a flat tire is dangerous." }
            ]},
            { text: "Wait for help?", choices: [
                { text: "Stay visible and safe.", outcome: "Safe and smart! 🎉", correct: true, explanation: "Visibility ensures safety." },
                { text: "Hide in the car.", outcome: "Less safe in traffic. 😔", correct: false, explanation: "Visibility is key for safety." }
            ]},
            { text: "Prevent breakdowns?", choices: [
                { text: "Regular maintenance.", outcome: "Proactive and smart! 🌟", correct: true, explanation: "Maintenance prevents issues." },
                { text: "Ignore maintenance.", outcome: "More breakdowns. 😞", correct: false, explanation: "Neglecting maintenance causes issues." }
            ]}
        ]
    },
    {
        id: 8,
        title: "Building Healthy Relationships ❤️",
        ageGroup: "21-25",
        story: "You’re dating someone new, but communication is tricky. 😕 You want to build trust and avoid misunderstandings. How do you create a healthy relationship? 💬",
        image: "relationships-placeholder.png",
        video: "relationships-video-placeholder.mp4",
        questions: [
            { text: "How to start communication?", choices: [
                { text: "Be open and honest.", outcome: "Trust grows! 🎉", correct: true, explanation: "Honesty builds trust." },
                { text: "Avoid tough topics.", outcome: "Misunderstandings grow. 😔", correct: false, explanation: "Avoidance creates distance." }
            ]},
            { text: "Set boundaries?", choices: [
                { text: "Yes, discuss limits.", outcome: "Respect increases! 🌟", correct: true, explanation: "Boundaries ensure mutual respect." },
                { text: "No, let it flow.", outcome: "Conflicts arise. 😞", correct: false, explanation: "No boundaries lead to issues." }
            ]},
            { text: "Handle disagreements?", choices: [
                { text: "Talk calmly.", outcome: "You resolve it! 🎉", correct: true, explanation: "Calm talks solve conflicts." },
                { text: "Yell or ignore.", outcome: "Tension grows. 😔", correct: false, explanation: "Yelling escalates conflicts." }
            ]},
            { text: "Spend quality time?", choices: [
                { text: "Yes, plan activities.", outcome: "Bond strengthens! 🌟", correct: true, explanation: "Quality time builds connection." },
                { text: "No, stay distant.", outcome: "You drift apart. 😞", correct: false, explanation: "Distance weakens bonds." }
            ]},
            { text: "Respect differences?", choices: [
                { text: "Yes, embrace them.", outcome: "You grow closer! 🎉", correct: true, explanation: "Respecting differences strengthens bonds." },
                { text: "No, demand sameness.", outcome: "Conflicts increase. 😞", correct: false, explanation: "Demanding sameness causes friction." }
            ]},
            { text: "Communicate needs?", choices: [
                { text: "Yes, be clear.", outcome: "Needs are met! 🌟", correct: true, explanation: "Clarity prevents frustration." },
                { text: "No, stay silent.", outcome: "Needs are ignored. 😔", correct: false, explanation: "Silence leads to unmet needs." }
            ]},
            { text: "Handle jealousy?", choices: [
                { text: "Talk openly.", outcome: "Trust improves! 🎉", correct: true, explanation: "Open talks resolve jealousy." },
                { text: "Accuse or snoop.", outcome: "Trust breaks. 😞", correct: false, explanation: "Accusations damage trust." }
            ]},
            { text: "Support their goals?", choices: [
                { text: "Yes, encourage them.", outcome: "You grow together! 🌟", correct: true, explanation: "Support strengthens bonds." },
                { text: "No, focus on yours.", outcome: "You drift apart. 😞", correct: false, explanation: "Lack of support creates distance." }
            ]},
            { text: "Check in regularly?", choices: [
                { text: "Yes, stay connected.", outcome: "Relationship thrives! 🎉", correct: true, explanation: "Check-ins maintain connection." },
                { text: "No, assume it’s fine.", outcome: "Issues grow unnoticed. 😔", correct: false, explanation: "Assuming causes neglect." }
            ]},
            { text: "Long-term goal?", choices: [
                { text: "Build mutual trust.", outcome: "Strong relationship! 🌟", correct: true, explanation: "Trust ensures lasting bonds." },
                { text: "Avoid commitment.", outcome: "Relationship fades. 😞", correct: false, explanation: "Commitment builds stability." }
            ]}
        ]
    },
    // Ages 25–28: Focus on career growth, financial planning, and life transitions
    {
        id: 9,
        title: "Giving CPR in a Medical Emergency 🚑",
        ageGroup: "25-28",
        story: "You're at a park when someone collapses and stops breathing. 😱 A crowd gathers, but no one knows what to do. You remember a CPR class you took. Time is critical! 🩺 Can you act quickly to save a life?",
        image: "cpr-placeholder.png",
        video: "cpr-video-placeholder.mp4",
        questions: [
            { text: "What’s the first step in CPR?", choices: [
                { text: "Check for responsiveness.", outcome: "Correct! You assess the situation. 🎉", correct: true, explanation: "Checking responsiveness ensures safety." },
                { text: "Start chest compressions.", outcome: "Wrong, you missed a step. 😔", correct: false, explanation: "Always check responsiveness first." }
            ]},
            { text: "How do you check responsiveness?", choices: [
                { text: "Shake and shout.", outcome: "Good job! You’re on track. 🌟", correct: true, explanation: "Shaking and shouting confirms consciousness." },
                { text: "Check pulse immediately.", outcome: "Not yet, check responsiveness first. 😞", correct: false, explanation: "Pulse check comes later." }
            ]},
            { text: "What if the person doesn’t respond?", choices: [
                { text: "Call for help.", outcome: "Smart! Help is on the way. 🎉", correct: true, explanation: "Calling 911 is critical." },
                { text: "Wait for them to wake up.", outcome: "Time is critical! 😔", correct: false, explanation: "Waiting delays life-saving action." }
            ]},
            { text: "Where do you place your hands for CPR?", choices: [
                { text: "Center of the chest.", outcome: "Perfect! You’re doing it right. 🌟", correct: true, explanation: "Correct hand placement ensures effective compressions." },
                { text: "On the stomach.", outcome: "Incorrect placement. 😞", correct: false, explanation: "Compressions on the stomach are ineffective." }
            ]},
            { text: "How fast should compressions be?", choices: [
                { text: "100-120 per minute.", outcome: "Great pace! You’re saving lives. 🎉", correct: true, explanation: "This rate maximizes blood flow." },
                { text: "As fast as possible.", outcome: "Too fast reduces effectiveness. 😔", correct: false, explanation: "Proper rhythm is key." }
            ]},
            { text: "How deep should compressions be?", choices: [
                { text: "About 2-2.4 inches.", outcome: "Correct depth! 🌟", correct: true, explanation: "Proper depth ensures circulation." },
                { text: "Barely press down.", outcome: "Too shallow, no circulation. 😞", correct: false, explanation: "Shallow compressions don’t work." }
            ]},
            { text: "Should you stop if tired?", choices: [
                { text: "Switch with someone else.", outcome: "Good teamwork! 🎉", correct: true, explanation: "Switching maintains effective CPR." },
                { text: "Stop completely.", outcome: "Stopping risks the person’s life. 😔", correct: false, explanation: "CPR must continue until help arrives." }
            ]},
            { text: "When to use an AED?", choices: [
                { text: "As soon as available.", outcome: "Smart! AEDs save lives. 🌟", correct: true, explanation: "AEDs restore heart rhythm." },
                { text: "Only after 10 minutes.", outcome: "Too late, use it sooner. 😞", correct: false, explanation: "AEDs are most effective early." }
            ]},
            { text: "Should you check pulse often?", choices: [
                { text: "No, continue CPR.", outcome: "Correct! Keep going. 🎉", correct: true, explanation: "Pausing CPR reduces effectiveness." },
                { text: "Yes, every minute.", outcome: "Pausing disrupts CPR. 😔", correct: false, explanation: "Only check pulse if signs of life appear." }
            ]},
            { text: "What if help hasn’t arrived?", choices: [
                { text: "Continue CPR.", outcome: "You’re a hero! 🌟", correct: true, explanation: "Continuing CPR sustains life." },
                { text: "Give up after 5 minutes.", outcome: "Never give up! 😞", correct: false, explanation: "CPR must continue until professionals take over." }
            ]}
        ]
    },
    {
        id: 10,
        title: "Planning for Financial Goals 💰",
        ageGroup: "25-28",
        story: "You’re earning a steady income but want to save for a house. 🏡 Expenses like rent and loans are high, and you’re tempted to splurge. How do you plan for big goals? 📈",
        image: "financial-goals-placeholder.png",
        video: "financial-goals-video-placeholder.mp4",
        questions: [
            { text: "Set a savings goal?", choices: [
                { text: "Yes, specific amount.", outcome: "You’re on track! 🎉", correct: true, explanation: "Specific goals guide saving." },
                { text: "No, save randomly.", outcome: "You miss your goal. 😔", correct: false, explanation: "Random saving lacks focus." }
            ]},
            { text: "Cut unnecessary expenses?", choices: [
                { text: "Yes, reduce splurging.", outcome: "More savings! 🌟", correct: true, explanation: "Cutting expenses boosts savings." },
                { text: "No, keep spending.", outcome: "Savings stall. 😞", correct: false, explanation: "Spending delays goals." }
            ]},
            { text: "Create a budget?", choices: [
                { text: "Yes, track income.", outcome: "Smart planning! 🎉", correct: true, explanation: "Budgets ensure control." },
                { text: "No, wing it.", outcome: "You overspend. 😔", correct: false, explanation: "No budget risks overspending." }
            ]},
            { text: "Invest savings?", choices: [
                { text: "Yes, low-risk options.", outcome: "Money grows! 🌟", correct: true, explanation: "Investing boosts savings." },
                { text: "No, keep in cash.", outcome: "Missed growth. 😞", correct: false, explanation: "Cash doesn’t grow." }
            ]},
            { text: "Pay off loans first?", choices: [
                { text: "Yes, high-interest ones.", outcome: "Less debt stress! 🎉", correct: true, explanation: "Paying high-interest loans saves money." },
                { text: "No, ignore loans.", outcome: "Debt grows. 😞", correct: false, explanation: "Ignoring loans increases costs." }
            ]},
            { text: "Emergency fund needed?", choices: [
                { text: "Yes, 3-6 months.", outcome: "You’re secure! 🌟", correct: true, explanation: "Emergency funds protect you." },
                { text: "No, skip it.", outcome: "You’re vulnerable. 😞", correct: false, explanation: "No fund risks financial trouble." }
            ]},
            { text: "Automate savings?", choices: [
                { text: "Yes, set transfers.", outcome: "Savings grow easily! 🎉", correct: true, explanation: "Automation ensures consistency." },
                { text: "No, save manually.", outcome: "You forget to save. 😔", correct: false, explanation: "Manual saving is inconsistent." }
            ]},
            { text: "Seek financial advice?", choices: [
                { text: "Yes, from experts.", outcome: "Informed choices! 🌟", correct: true, explanation: "Experts guide smart decisions." },
                { text: "No, do it alone.", outcome: "You miss strategies. 😞", correct: false, explanation: "Experts optimize plans." }
            ]},
            { text: "Track progress?", choices: [
                { text: "Yes, review monthly.", outcome: "You stay on track! 🎉", correct: true, explanation: "Tracking ensures success." },
                { text: "No, ignore it.", outcome: "You lose focus. 😞", correct: false, explanation: "No tracking risks failure." }
            ]},
            { text: "Adjust for life changes?", choices: [
                { text: "Yes, update plans.", outcome: "You stay flexible! 🌟", correct: true, explanation: "Flexibility supports goals." },
                { text: "No, keep same plan.", outcome: "You fall behind. 😞", correct: false, explanation: "Rigid plans fail with changes." }
            ]}
        ]
    }
];

let userProgress = { stars: 0, trophies: 0, completed: [] };
let currentScenario = null;
let currentQuestionIndex = 0;
let utterance = null;
let isSpeaking = false;
let isPaused = false;

function loadScenarios(searchTerm = '') {
    const ageGroups = ['15-18', '18-20', '21-25', '25-28'];
    ageGroups.forEach(age => {
        const scenarioGrid = document.querySelector(`.scenario-grid[data-age="${age}"]`);
        scenarioGrid.innerHTML = '';
        scenarios
            .filter(s => s.ageGroup === age && (
                s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                s.story.toLowerCase().includes(searchTerm.toLowerCase()) ||
                s.ageGroup.toLowerCase().includes(searchTerm.toLowerCase())
            ))
            .forEach(scenario => {
                const scenarioCard = document.createElement('div');
                scenarioCard.className = 'scenario-card';
                scenarioCard.innerHTML = `<h3>${scenario.title}</h3><p>${scenario.story}</p>`;
                if (userProgress.completed.includes(scenario.id)) {
                    scenarioCard.innerHTML += '<span>🏆 Completed</span>';
                }
                scenarioCard.addEventListener('click', () => loadScenario(scenario.id));
                scenarioGrid.appendChild(scenarioCard);
            });
    });
    updateProgress();
}

function loadScenario(id) {
    currentScenario = scenarios.find(s => s.id === id);
    currentQuestionIndex = 0;
    document.getElementById('scenario-list').style.display = 'none';
    const content = document.getElementById('scenario-content');
    content.style.display = 'block';
    document.getElementById('scenario-title').textContent = currentScenario.title;
    document.getElementById('scenario-story').textContent = currentScenario.story;
    document.getElementById('scenario-image').src = currentScenario.image;
    document.getElementById('video-section').querySelector('video').src = currentScenario.video;
    updateProgressBar();
    loadQuestion();
}

function loadQuestion() {
    const question = currentScenario.questions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.text;
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
    question.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.addEventListener('click', () => handleChoice(choice));
        choicesDiv.appendChild(button);
    });
    document.getElementById('feedback').textContent = '';
    document.getElementById('next-question').style.display = 'none';
    document.getElementById('back-to-scenarios').style.display = 'none';
    updateProgressBar();
}

function handleChoice(choice) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = choice.outcome;
    if (choice.correct) {
        userProgress.stars++;
        localStorage.setItem('lifeSimProgress', JSON.stringify(userProgress));
        showCelebration();
        if (currentQuestionIndex === currentScenario.questions.length - 1) {
            if (!userProgress.completed.includes(currentScenario.id)) {
                userProgress.trophies++;
                userProgress.completed.push(currentScenario.id);
                localStorage.setItem('lifeSimProgress', JSON.stringify(userProgress));
            }
            document.getElementById('back-to-scenarios').style.display = 'block';
        } else {
            document.getElementById('next-question').style.display = 'block';
        }
    } else {
        showWrongAnswer(choice.explanation);
    }
    updateProgress();
}

function updateProgressBar() {
    const progressFill = document.getElementById('progress-fill');
    const progress = ((currentQuestionIndex + 1) / currentScenario.questions.length) * 100;
    progressFill.style.width = `${progress}%`;
}

function showCelebration() {
    const celebration = document.getElementById('celebration');
    celebration.classList.remove('hidden');
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff4d94', '#8e44ad', '#00d4ff', '#ff7e5f', '#32cd32']
    });
}

function showWrongAnswer(explanation) {
    const wrongAnswer = document.getElementById('wrong-answer');
    document.getElementById('wrong-explanation').textContent = explanation;
    wrongAnswer.classList.remove('hidden');
}

function closeCelebration() {
    document.getElementById('celebration').classList.add('hidden');
    if (currentQuestionIndex < currentScenario.questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        reset();
    }
}

function closeWrongAnswer() {
    document.getElementById('wrong-answer').classList.add('hidden');
}

function reset() {
    document.getElementById('scenario-list').style.display = 'block';
    document.getElementById('scenario-content').style.display = 'none';
    document.getElementById('feedback').textContent = '';
    document.getElementById('next-question').style.display = 'none';
    document.getElementById('back-to-scenarios').style.display = 'none';
    loadScenarios(document.getElementById('search-bar').value);
}

function updateProgress() {
    document.getElementById('stars').textContent = `Stars: ${userProgress.stars} ⭐`;
    document.getElementById('trophies').textContent = `Trophies: ${userProgress.trophies} 🏆`;
}

function toggleTheme() {
    const body = document.body;
    const toggleButton = document.getElementById('theme-toggle');
    if (body.classList.contains('night-theme')) {
        body.classList.remove('night-theme');
        body.classList.add('day-theme');
        toggleButton.textContent = 'Switch to Night Theme 🌙';
    } else {
        body.classList.remove('day-theme');
        body.classList.add('night-theme');
        toggleButton.textContent = 'Switch to Day Theme ☀️';
    }
}

function openSpeakModal() {
    document.getElementById('speak-modal').classList.remove('hidden');
    document.getElementById('speak-status').textContent = 'Ready to read';
    document.getElementById('pause-stop-speak').disabled = true;
}

function closeSpeakModal() {
    document.getElementById('speak-modal').classList.add('hidden');
    stopSpeech();
}

function playSpeech() {
    if (!isSpeaking || isPaused) {
        if (!utterance) {
            const story = document.getElementById('scenario-story').textContent;
            utterance = new SpeechSynthesisUtterance(story);
            utterance.lang = 'en-US';
            utterance.onend = () => {
                isSpeaking = false;
                isPaused = false;
                document.getElementById('speak-status').textContent = 'Finished';
                document.getElementById('pause-stop-speak').disabled = true;
                utterance = null;
            };
        }
        speechSynthesis.speak(utterance);
        isSpeaking = true;
        isPaused = false;
        document.getElementById('speak-status').textContent = 'Speaking...';
        document.getElementById('pause-stop-speak').disabled = false;
        document.getElementById('pause-stop-speak').textContent = 'Pause ⏸️';
    }
}

function pauseStopSpeech() {
    if (isSpeaking && !isPaused) {
        speechSynthesis.pause();
        isPaused = true;
        document.getElementById('speak-status').textContent = 'Paused';
        document.getElementById('pause-stop-speak').textContent = 'Resume ▶️';
    } else if (isSpeaking && isPaused) {
        speechSynthesis.resume();
        isPaused = false;
        document.getElementById('speak-status').textContent = 'Speaking...';
        document.getElementById('pause-stop-speak').textContent = 'Pause ⏸️';
    }
}

function stopSpeech() {
    if (isSpeaking) {
        speechSynthesis.cancel();
        isSpeaking = false;
        isPaused = false;
        document.getElementById('speak-status').textContent = 'Stopped';
        document.getElementById('pause-stop-speak').disabled = true;
        utterance = null;
    }
}

function handleBack() {
    if (document.getElementById('scenario-content').style.display === 'block') {
        reset();
    } else {
        loadScenarios(); // Reload scenario list or navigate to a hypothetical home page
    }
}

function toggleAgeGroup(event) {
    const header = event.currentTarget;
    const age = header.dataset.age;
    const grid = document.querySelector(`.scenario-grid[data-age="${age}"]`);
    const toggleIcon = header.querySelector('.toggle-icon');
    if (grid.classList.contains('hidden')) {
        grid.classList.remove('hidden');
        toggleIcon.textContent = '▼';
    } else {
        grid.classList.add('hidden');
        toggleIcon.textContent = '▶';
    }
}

function initBackgroundAnimation() {
    const canvas = document.getElementById('background-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const circles = [];
    for (let i = 0; i < 15; i++) {
        circles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 40 + 20,
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 1.5,
            color: ['#ff4d94', '#8e44ad', '#00d4ff', '#ff7e5f', '#32cd32'][Math.floor(Math.random() * 5)]
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        circles.forEach(circle => {
            circle.x += circle.vx;
            circle.y += circle.vy;

            if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) circle.vx *= -1;
            if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) circle.vy *= -1;

            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
            ctx.fillStyle = circle.color + '33'; // 20% opacity
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

window.onload = () => {
    const savedProgress = localStorage.getItem('lifeSimProgress');
    if (savedProgress) {
        userProgress = JSON.parse(savedProgress);
    } else {
        localStorage.setItem('lifeSimProgress', JSON.stringify(userProgress));
    }
    loadScenarios();
    initBackgroundAnimation();
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('search-bar').addEventListener('input', (e) => loadScenarios(e.target.value));
    document.getElementById('next-question').addEventListener('click', closeCelebration);
    document.getElementById('back-to-scenarios').addEventListener('click', reset);
    document.getElementById('speak-button').addEventListener('click', openSpeakModal);
    document.getElementById('play-speak').addEventListener('click', playSpeech);
    document.getElementById('pause-stop-speak').addEventListener('click', pauseStopSpeech);
    document.getElementById('close-speak-modal').addEventListener('click', closeSpeakModal);
    document.getElementById('back-button').addEventListener('click', handleBack);
    document.querySelectorAll('.age-group-header').forEach(header => {
        header.addEventListener('click', toggleAgeGroup);
    });
};

window.onresize = () => {
    const canvas = document.getElementById('background-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};