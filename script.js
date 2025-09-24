// Global Variables
let currentGame = null;
let currentQuestion = 0;
let currentScore = 0;
let playerName = '';

// Quiz Questions Data
const quizQuestions = [
    {
        question: "What does 'AI' stand for?",
        answers: ["Artificial Intelligence", "Automated Intelligence", "Advanced Information", "Artificial Information"],
        correct: 0
    },
    {
        question: "Which company developed ChatGPT?",
        answers: ["Google", "Microsoft", "OpenAI", "Meta"],
        correct: 2
    },
    {
        question: "What is machine learning?",
        answers: ["A type of computer", "A subset of AI that learns from data", "A programming language", "A type of robot"],
        correct: 1
    },
    {
        question: "What is the Turing Test used for?",
        answers: ["Testing computer speed", "Testing if a machine can exhibit intelligent behavior", "Testing internet connection", "Testing memory capacity"],
        correct: 1
    },
    {
        question: "Which of these is a popular AI assistant?",
        answers: ["Windows", "Chrome", "Alexa", "Firefox"],
        correct: 2
    },
    {
        question: "What does 'ML' commonly refer to in AI?",
        answers: ["Machine Language", "Machine Learning", "Multiple Logic", "Master List"],
        correct: 1
    },
    {
        question: "What is a neural network inspired by?",
        answers: ["Computer circuits", "The human brain", "The internet", "Mathematical equations"],
        correct: 1
    },
    {
        question: "What is 'deep learning'?",
        answers: ["Learning underwater", "A type of machine learning with multiple layers", "Learning for long hours", "A meditation technique"],
        correct: 1
    },
    {
        question: "Which of these is NOT a type of AI?",
        answers: ["Narrow AI", "General AI", "Super AI", "Micro AI"],
        correct: 3
    },
    {
        question: "What is the main goal of AI?",
        answers: ["Replace humans", "Make computers faster", "Create machines that can perform tasks requiring human intelligence", "Build robots"],
        correct: 2
    }
];

// Millionaire Questions Data (increasing difficulty)
const millionaireLevels = [
    {
        question: "What is the most basic form of AI?",
        answers: ["Deep Learning", "Machine Learning", "Rule-based systems", "Neural Networks"],
        correct: 2
    },
    {
        question: "Which programming language is most commonly used for AI?",
        answers: ["JavaScript", "Python", "C++", "Java"],
        correct: 1
    },
    {
        question: "What does 'GPT' in ChatGPT stand for?",
        answers: ["General Purpose Technology", "Generative Pre-trained Transformer", "Global Processing Tool", "Guided Prediction Technology"],
        correct: 1
    },
    {
        question: "What is computer vision?",
        answers: ["AI that can interpret visual information", "A type of monitor", "Virtual reality", "3D graphics"],
        correct: 0
    },
    {
        question: "What is natural language processing (NLP)?",
        answers: ["Programming in natural languages", "AI's ability to understand human language", "A type of algorithm", "Computer translation only"],
        correct: 1
    },
    {
        question: "What is the main difference between AI and traditional programming?",
        answers: ["AI is faster", "AI learns from data instead of following pre-written rules", "AI uses more memory", "AI is newer"],
        correct: 1
    },
    {
        question: "What is reinforcement learning?",
        answers: ["Learning by repetition", "Learning through trial and error with rewards/penalties", "Learning only from textbooks", "Learning from teachers"],
        correct: 1
    },
    {
        question: "What is the 'singularity' in AI context?",
        answers: ["A single AI system", "The point where AI surpasses human intelligence", "AI working alone", "The first AI"],
        correct: 1
    },
    {
        question: "What is bias in AI systems?",
        answers: ["AI preferring certain outcomes unfairly", "AI being too fast", "AI using too much power", "AI being expensive"],
        correct: 0
    },
    {
        question: "What is explainable AI (XAI)?",
        answers: ["AI that talks", "AI that can explain its decisions", "Simple AI", "AI for education"],
        correct: 1
    }
];

// AI or Human Text Data
const aiHumanTexts = [
    {
        text: "The golden rays of sunlight danced through the emerald canopy, casting intricate shadows that whispered secrets to the forest floor below. Nature's symphony played softly as gentle breezes carried the sweet fragrance of wildflowers across the meadow.",
        type: "ai",
        explanation: "This text has typical AI characteristics: overly poetic language, generic descriptions, and flowery metaphors that sound nice but lack specific, personal details."
    },
    {
        text: "I was running late for my 3 PM meeting when I realized I'd left my laptop charger at home. Again. This is the third time this month. My coworker Sarah just laughed and said 'At least you're consistent!' Thanks, Sarah.",
        type: "human",
        explanation: "This has human characteristics: specific details (3 PM, third time this month), personal frustration, conversational tone, and a relatable everyday situation with real emotion."
    },
    {
        text: "Artificial intelligence represents a paradigm shift in technological advancement, offering unprecedented opportunities for innovation across multiple sectors while simultaneously presenting complex challenges that require careful consideration and strategic implementation.",
        type: "ai",
        explanation: "This is classic AI business-speak: buzzwords like 'paradigm shift' and 'unprecedented opportunities,' formal tone, and generic statements without specific examples."
    },
    {
        text: "My grandmother always said that the best apple pie needs a pinch of cinnamon and a lot of patience. She was right about the patience part - I burned three pies before getting it right. But man, was it worth it.",
        type: "human",
        explanation: "This shows human storytelling: personal family reference, specific details (three burned pies), emotional connection, and casual language ('But man, was it worth it')."
    },
    {
        text: "In conclusion, the multifaceted nature of modern communication technologies enables seamless connectivity while fostering innovative solutions that enhance productivity and facilitate meaningful interactions across diverse global communities.",
        type: "ai",
        explanation: "This reads like AI-generated summary text: formal academic tone, buzzwords, and a generic conclusion that doesn't add specific value or personal insight."
    },
    {
        text: "The coffee shop on 5th Street makes the worst espresso I've ever tasted. It's like they're trying to punish people for wanting caffeine. But their WiFi is fast and the corner table is perfect for people-watching, so I keep going back.",
        type: "human",
        explanation: "This shows human authenticity: specific location (5th Street), personal opinion with humor, contradictory behavior (going back despite bad coffee), and realistic decision-making."
    },
    {
        text: "The harmonious convergence of cutting-edge technology and sustainable practices creates synergistic opportunities that drive transformative growth while ensuring environmental stewardship for future generations through innovative methodologies.",
        type: "ai",
        explanation: "This is quintessential AI corporate jargon: buzzword soup ('harmonious convergence,' 'synergistic opportunities'), no concrete examples, and sounds impressive but says very little."
    }
];

// Tab Management
function showTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Load leaderboard when switching to it
    if (tabName === 'leaderboard') {
        loadLeaderboards();
    }
}

// Quiz Challenge Functions
function startQuiz() {
    playerName = document.getElementById('quiz-player-name').value.trim();
    if (!playerName) {
        alert('Please enter your name!');
        return;
    }
    
    currentQuestion = 0;
    currentScore = 0;
    
    document.getElementById('quiz-start').classList.add('hidden');
    document.getElementById('quiz-playing').classList.remove('hidden');
    
    showQuizQuestion();
}

function showQuizQuestion() {
    const question = quizQuestions[currentQuestion];
    
    document.getElementById('quiz-question-num').textContent = currentQuestion + 1;
    document.getElementById('quiz-score').textContent = currentScore;
    document.getElementById('quiz-question').textContent = question.question;
    
    const answersContainer = document.getElementById('quiz-answers');
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.onclick = () => selectQuizAnswer(index);
        answersContainer.appendChild(button);
    });
    
    document.getElementById('quiz-feedback').classList.add('hidden');
}

function selectQuizAnswer(selectedIndex) {
    const question = quizQuestions[currentQuestion];
    const buttons = document.querySelectorAll('#quiz-answers .answer-btn');
    const feedback = document.getElementById('quiz-feedback');
    
    buttons.forEach((btn, index) => {
        btn.classList.add('disabled');
        if (index === question.correct) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && index !== question.correct) {
            btn.classList.add('incorrect');
        }
    });
    
    if (selectedIndex === question.correct) {
        currentScore++;
        feedback.textContent = 'Correct! 🎉';
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = `Incorrect! The correct answer was: ${question.answers[question.correct]}`;
        feedback.className = 'feedback incorrect';
    }
    
    feedback.classList.remove('hidden');
    
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizQuestions.length) {
            showQuizQuestion();
        } else {
            endQuiz();
        }
    }, 2000);
}

function endQuiz() {
    document.getElementById('quiz-playing').classList.add('hidden');
    document.getElementById('quiz-end').classList.remove('hidden');
    document.getElementById('quiz-final-score').textContent = `${currentScore}/10`;
    
    // Save score to leaderboard
    saveScore('quiz', playerName, currentScore, 10);
}

function resetQuiz() {
    document.getElementById('quiz-end').classList.add('hidden');
    document.getElementById('quiz-start').classList.remove('hidden');
    document.getElementById('quiz-player-name').value = '';
}

// Millionaire Functions
let millionaireLevel = 0;
let fiftyFiftyUsed = false;
let skipUsed = false;

function startMillionaire() {
    playerName = document.getElementById('millionaire-player-name').value.trim();
    if (!playerName) {
        alert('Please enter your name!');
        return;
    }
    
    millionaireLevel = 0;
    fiftyFiftyUsed = false;
    skipUsed = false;
    
    document.getElementById('fifty-fifty').classList.remove('used');
    document.getElementById('skip-question').classList.remove('used');
    
    document.getElementById('millionaire-start').classList.add('hidden');
    document.getElementById('millionaire-playing').classList.remove('hidden');
    
    showMillionaireQuestion();
}

function showMillionaireQuestion() {
    const question = millionaireLevels[millionaireLevel];
    
    document.getElementById('millionaire-level').textContent = millionaireLevel + 1;
    document.getElementById('millionaire-question').textContent = question.question;
    
    const answersContainer = document.getElementById('millionaire-answers');
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.onclick = () => selectMillionaireAnswer(index);
        answersContainer.appendChild(button);
    });
    
    document.getElementById('millionaire-feedback').classList.add('hidden');
}

function selectMillionaireAnswer(selectedIndex) {
    const question = millionaireLevels[millionaireLevel];
    const buttons = document.querySelectorAll('#millionaire-answers .answer-btn');
    const feedback = document.getElementById('millionaire-feedback');
    
    buttons.forEach((btn, index) => {
        btn.classList.add('disabled');
        if (index === question.correct) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && index !== question.correct) {
            btn.classList.add('incorrect');
        }
    });
    
    if (selectedIndex === question.correct) {
        feedback.textContent = 'Correct! Moving to the next level! 🎉';
        feedback.className = 'feedback correct';
        
        setTimeout(() => {
            millionaireLevel++;
            if (millionaireLevel < millionaireLevels.length) {
                showMillionaireQuestion();
            } else {
                endMillionaire(true);
            }
        }, 2000);
    } else {
        feedback.textContent = `Wrong answer! Game over.`;
        feedback.className = 'feedback incorrect';
        
        setTimeout(() => {
            endMillionaire(false);
        }, 2000);
    }
    
    feedback.classList.remove('hidden');
}

function useFiftyFifty() {
    if (fiftyFiftyUsed) return;
    
    const question = millionaireLevels[millionaireLevel];
    const buttons = document.querySelectorAll('#millionaire-answers .answer-btn');
    const correctIndex = question.correct;
    
    let hiddenCount = 0;
    buttons.forEach((btn, index) => {
        if (index !== correctIndex && hiddenCount < 2) {
            btn.style.opacity = '0.3';
            btn.classList.add('disabled');
            hiddenCount++;
        }
    });
    
    fiftyFiftyUsed = true;
    document.getElementById('fifty-fifty').classList.add('used');
}

function skipQuestion() {
    if (skipUsed) return;
    
    skipUsed = true;
    document.getElementById('skip-question').classList.add('used');
    
    millionaireLevel++;
    if (millionaireLevel < millionaireLevels.length) {
        showMillionaireQuestion();
    } else {
        endMillionaire(true);
    }
}

function endMillionaire(won) {
    document.getElementById('millionaire-playing').classList.add('hidden');
    document.getElementById('millionaire-end').classList.remove('hidden');
    document.getElementById('millionaire-final-level').textContent = millionaireLevel + (won ? 0 : 0);
    
    // Save score to leaderboard
    saveScore('millionaire', playerName, millionaireLevel, 10);
}

function resetMillionaire() {
    document.getElementById('millionaire-end').classList.add('hidden');
    document.getElementById('millionaire-start').classList.remove('hidden');
    document.getElementById('millionaire-player-name').value = '';
}

// AI or Human Game Functions
let aiHumanQuestion = 0;
let aiHumanScore = 0;

function startAiHumanGame() {
    playerName = document.getElementById('ai-human-player-name').value.trim();
    if (!playerName) {
        alert('Please enter your name!');
        return;
    }
    
    aiHumanQuestion = 0;
    aiHumanScore = 0;
    
    document.getElementById('ai-human-start').classList.add('hidden');
    document.getElementById('ai-human-playing').classList.remove('hidden');
    
    showAiHumanQuestion();
}

function showAiHumanQuestion() {
    const textSample = aiHumanTexts[aiHumanQuestion];
    
    document.getElementById('ai-human-question-num').textContent = aiHumanQuestion + 1;
    document.getElementById('ai-human-score').textContent = aiHumanScore;
    document.getElementById('ai-human-text').textContent = textSample.text;
    
    // Reset answer buttons
    const buttons = document.querySelectorAll('#ai-human-answers .answer-btn');
    buttons.forEach(btn => {
        btn.classList.remove('correct', 'incorrect', 'disabled');
        btn.style.pointerEvents = 'auto';
    });
    
    document.getElementById('ai-human-feedback').classList.add('hidden');
}

function selectAiHumanAnswer(selectedAnswer) {
    const textSample = aiHumanTexts[aiHumanQuestion];
    const buttons = document.querySelectorAll('#ai-human-answers .answer-btn');
    const feedback = document.getElementById('ai-human-feedback');
    
    // Disable all buttons
    buttons.forEach(btn => {
        btn.classList.add('disabled');
        btn.style.pointerEvents = 'none';
    });
    
    // Highlight correct answer
    buttons.forEach(btn => {
        if (btn.onclick.toString().includes(textSample.type)) {
            btn.classList.add('correct');
        } else if (btn.onclick.toString().includes(selectedAnswer) && selectedAnswer !== textSample.type) {
            btn.classList.add('incorrect');
        }
    });
    
    if (selectedAnswer === textSample.type) {
        aiHumanScore++;
        feedback.textContent = `Correct! 🎉 ${textSample.explanation}`;
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = `Incorrect! This was ${textSample.type.toUpperCase()}-generated. ${textSample.explanation}`;
        feedback.className = 'feedback incorrect';
    }
    
    feedback.classList.remove('hidden');
    
    setTimeout(() => {
        aiHumanQuestion++;
        if (aiHumanQuestion < aiHumanTexts.length) {
            showAiHumanQuestion();
        } else {
            endAiHumanGame();
        }
    }, 4000); // Longer delay to read explanation
}

function endAiHumanGame() {
    document.getElementById('ai-human-playing').classList.add('hidden');
    document.getElementById('ai-human-end').classList.remove('hidden');
    document.getElementById('ai-human-final-score').textContent = `${aiHumanScore}/${aiHumanTexts.length}`;
    
    // Save score to leaderboard
    saveScore('ai-human', playerName, aiHumanScore, aiHumanTexts.length);
}

function resetAiHumanGame() {
    document.getElementById('ai-human-end').classList.add('hidden');
    document.getElementById('ai-human-start').classList.remove('hidden');
    document.getElementById('ai-human-player-name').value = '';
}

// Leaderboard Functions
function saveScore(gameType, name, score, maxScore) {
    let leaderboard = JSON.parse(localStorage.getItem(`${gameType}-leaderboard`)) || [];
    
    const entry = {
        name: name,
        score: score,
        maxScore: maxScore,
        timestamp: new Date().toISOString()
    };
    
    leaderboard.push(entry);
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 10); // Keep top 10
    
    localStorage.setItem(`${gameType}-leaderboard`, JSON.stringify(leaderboard));
}

function loadLeaderboards() {
    loadSingleLeaderboard('quiz', 'quiz-leaderboard');
    loadSingleLeaderboard('millionaire', 'millionaire-leaderboard');
    loadSingleLeaderboard('ai-human', 'ai-human-leaderboard');
}

function loadSingleLeaderboard(gameType, containerId) {
    const container = document.getElementById(containerId);
    const leaderboard = JSON.parse(localStorage.getItem(`${gameType}-leaderboard`)) || [];
    
    if (leaderboard.length === 0) {
        container.innerHTML = '<p class="no-scores">No scores yet!</p>';
        return;
    }
    
    container.innerHTML = leaderboard.map((entry, index) => `
        <div class="leaderboard-item">
            <span class="leaderboard-rank">#${index + 1}</span>
            <span class="leaderboard-name">${entry.name}</span>
            <span class="leaderboard-score">${entry.score}/${entry.maxScore}</span>
        </div>
    `).join('');
}

function clearAllLeaderboards() {
    if (confirm('Are you sure you want to clear all leaderboards?')) {
        localStorage.removeItem('quiz-leaderboard');
        localStorage.removeItem('millionaire-leaderboard');
        localStorage.removeItem('ai-human-leaderboard');
        loadLeaderboards();
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    loadLeaderboards();
});
