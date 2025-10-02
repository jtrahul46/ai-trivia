// Global Variables
let currentGame = null;
let currentQuestion = 0;
let currentScore = 0;
let playerName = '';

// Quiz Questions Data (50 questions - 5 randomly selected each game)
const allQuizQuestions = [
  {
    question: "What does AI stand for?",
    answers: ["Auto Internet", "Artificial Intelligence", "Alien Invention", "Awesome Ideas"],
    correct: 1
  },
  {
    question: "Which app can write essays, code, and poems?",
    answers: ["Spotify", "Instagram", "ChatGPT", "Snapchat"],
    correct: 2
  },
  {
    question: "Which AI assistant can you say 'Hey' to at home?",
    answers: ["Mario", "Cortana", "Excel", "Alexa"],
    correct: 3
  },
  {
    question: "Which of these can AI NOT do (yet)?",
    answers: ["Order food for you", "Taste food", "Draw pictures", "Predict weather"],
    correct: 1
  },
  {
    question: "Which company is famous for self-driving cars using AI?",
    answers: ["Adobe", "Disney", "Nike", "Tesla"],
    correct: 3
  },
  {
    question: "Which AI tool can make fake photos of people who don’t exist?",
    answers: ["TikTok", "Deepfake", "Paint", "Photoshop"],
    correct: 1
  },
  {
    question: "What’s the name of Iron Man’s AI assistant?",
    answers: ["Optimus", "Jarvis", "Siri", "Alfred"],
    correct: 1
  },
  {
    question: "AI that understands speech is called…?",
    answers: ["PowerPoint", "Computer Vision", "Block-Chain", "Natural Language Processing"],
    correct: 3
  },
  {
    question: "Which of these games has strong AI opponents?",
    answers: ["Hide & Seek", "Ludo", "Chess", "Rock-Paper-Scissors"],
    correct: 2
  },
  {
    question: "Which movie is about AI robots taking over the world?",
    answers: ["Home Alone", "Finding Nemo", "The Terminator", "Fast & Furious"],
    correct: 2
  },
  {
    question: "What is a 'chatbot' mainly used for?",
    answers: ["Driving cars", "Talking with humans", "Lifting weights", "Cooking dinner"],
    correct: 1
  },
  {
    question: "Which social media often uses AI to suggest videos?",
    answers: ["Excel", "Wikipedia", "TikTok", "LinkedIn"],
    correct: 2
  },
  {
    question: "What’s the goal of a recommendation system?",
    answers: ["Grading homework", "Fixing your Wi-Fi", "Suggesting what you may like", "Forcing you to buy stuff"],
    correct: 2
  },
  {
    question: "What does AI in your phone’s camera help with?",
    answers: ["Detecting faces & scenes", "Making calls", "Downloading apps", "Charging battery"],
    correct: 0
  },
  {
    question: "Which of these is a famous AI image generator?",
    answers: ["Zoom", "WhatsApp", "DALL·E", "Notepad"],
    correct: 2
  },
  {
    question: "Which voice AI says 'Hey Siri'?",
    answers: ["Samsung", "Microsoft", "Apple", "Sony"],
    correct: 2
  },
  {
    question: "Which AI-powered vacuum cleaner can clean your house?",
    answers: ["Mixer", "Roomba", "Dyson Fan", "PS5"],
    correct: 1
  },
  {
    question: "Which AI is used to unlock phones with your face?",
    answers: ["Captcha", "Blockchain", "Facial Recognition", "Data Mining"],
    correct: 2
  },
  {
    question: "Which superhero movie has Ultron, an AI villain?",
    answers: ["Shrek", "Avengers: Age of Ultron", "Spider-Man", "Batman"],
    correct: 1
  },
  {
    question: "What does AI use to 'learn'?",
    answers: ["Dreams", "Data", "Wi-Fi only", "Batteries"],
    correct: 1
  },
  {
    question: "Which AI can turn text into art?",
    answers: ["WordPad", "DALL·E", "Zoom", "Netflix"],
    correct: 1
  },
  {
    question: "Which car brand uses AI autopilot features?",
    answers: ["Ford", "Honda", "Tesla", "BMW"],
    correct: 2
  },
  {
    question: "What does 'GPT' in ChatGPT stand for?",
    answers: ["Global Programming Template", "Generative Pre-trained Transformer", "Great Powerful Tool", "General Purpose Technology"],
    correct: 1
  },
  {
    question: "Which AI-powered website suggests movies/shows?",
    answers: ["Canva", "Flipkart", "Netflix", "Wikipedia"],
    correct: 2
  },
  {
    question: "Which AI can change your selfies into cartoons?",
    answers: ["Zoom", "PowerPoint", "Excel", "FaceApp"],
    correct: 3
  },
  {
    question: "What’s a 'deepfake'?",
    answers: ["A new hairstyle", "A fake video created using AI", "A type of sandwich", "A video game"],
    correct: 1
  },
  {
    question: "Which AI system can translate languages instantly?",
    answers: ["Maps", "Photoshop", "Google Translate", "Excel"],
    correct: 2
  },
  {
    question: "Which AI beats world champions in chess?",
    answers: ["YouTube", "Google Maps", "Deep Blue", "PowerPoint"],
    correct: 2
  },
  {
    question: "What do we call AI that can drive cars?",
    answers: ["Arcade Driving", "Autonomous Driving", "Fast & Furious Mode", "Turbo Mode"],
    correct: 1
  },
  {
    question: "Which AI assistant comes with Android phones?",
    answers: ["Clippy", "Siri", "Alexa", "Google Assistant"],
    correct: 3
  },
  {
    question: "Which AI is used in Snapchat filters?",
    answers: ["Computer Vision", "Quantum AI", "Cooking AI", "Crypto Mining"],
    correct: 0
  },
  {
    question: "Which AI movie features a boy befriending a robot named Baymax?",
    answers: ["Frozen", "Cars", "Toy Story", "Big Hero 6"],
    correct: 3
  },
  {
    question: "What is AI that recognizes text in images called?",
    answers: ["VR", "CPU", "NLP", "OCR"],
    correct: 3
  },
  {
    question: "Which AI makes song recommendations on Spotify?",
    answers: ["Data Saver", "Recommendation System", "Ad Blocker", "Weather App"],
    correct: 1
  },
  {
    question: "Which AI villain says 'I'll be back'?",
    answers: ["Thanos", "Joker", "The Terminator", "Venom"],
    correct: 2
  },
  {
    question: "Which AI tool can generate human-like voices?",
    answers: ["Antivirus", "Calculator", "Paint", "Text-to-Speech"],
    correct: 3
  },
  {
    question: "Which AI is commonly used in Google Maps?",
    answers: ["Cooking AI", "Fashion AI", "Predictive AI for traffic", "Gaming AI"],
    correct: 2
  },
  {
    question: "Which of these is NOT an AI assistant?",
    answers: ["Siri", "Photoshop", "Jarvis", "Alexa"],
    correct: 1
  },
  {
    question: "Which AI lets you talk to customer support bots?",
    answers: ["Fax", "Chatbots", "Email", "Printers"],
    correct: 1
  },
  {
    question: "Which AI can turn speech into text?",
    answers: ["Autopilot", "Spam Filter", "Speech Recognition", "VPN"],
    correct: 2
  },
  {
    question: "Which AI app creates 'Magic Avatars' from selfies?",
    answers: ["Spotify", "Lensa", "Paint", "Excel"],
    correct: 1
  },
  {
    question: "Which of these is a danger of AI?",
    answers: ["Low battery", "Instant food delivery", "Fake news & deepfakes", "Wi-Fi issues"],
    correct: 2
  },
  {
    question: "Which AI tool can autocomplete your emails?",
    answers: ["TikTok", "YouTube", "Gmail Smart Compose", "Maps"],
    correct: 2
  },
  {
    question: "Which AI-powered device can answer 'What's the weather?'",
    answers: ["Fridge", "TV Remote", "Smart Speaker", "Toaster"],
    correct: 2
  },
  {
    question: "Which sci-fi movie has a ship computer called HAL 9000?",
    answers: ["Interstellar", "Star Wars", "Titanic", "2001: A Space Odyssey"],
    correct: 3
  },
  {
    question: "Which AI tool helps remove objects from photos?",
    answers: ["Generative Fill", "YouTube Shorts", "Excel", "WhatsApp"],
    correct: 0
  },
  {
    question: "Which AI was used to beat humans in the game Go?",
    answers: ["DeepBlue", "Jarvis", "AlphaGo", "Mario Kart AI"],
    correct: 2
  },
  {
    question: "Which AI assistant lives in Windows PCs?",
    answers: ["Siri", "Cortana", "Alexa", "Bixby"],
    correct: 1
  },
  {
    question: "What’s the term for AI that mimics the human brain?",
    answers: ["Neural Network", "Brainstorm AI", "Quantum Loop", "Bio Chip"],
    correct: 0
  },
  {
    question: "Which AI do you interact with when asking 'Okay Google'?",
    answers: ["Docs", "Google Assistant", "Chrome", "Maps"],
    correct: 1
  }
];


// Current quiz questions for the round (5 randomly selected)
let quizQuestions = [];

// Millionaire Questions Data (50 questions - 5 randomly selected each game)
const allMillionaireLevels = [
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
    },
    {
        question: "What is supervised learning?",
        answers: ["Learning with supervision", "Machine learning with labeled training data", "Learning during work hours", "Guided tutorials"],
        correct: 1
    },
    {
        question: "What is unsupervised learning?",
        answers: ["Learning without teachers", "Finding patterns in data without labels", "Unauthorized learning", "Independent study"],
        correct: 1
    },
    {
        question: "What is a convolutional neural network (CNN)?",
        answers: ["A network for conversations", "A deep learning architecture for image processing", "A social network", "A computer network"],
        correct: 1
    },
    {
        question: "What is backpropagation?",
        answers: ["Going backwards", "Algorithm for training neural networks by adjusting weights", "Network failure", "Data recovery"],
        correct: 1
    },
    {
        question: "What is overfitting in machine learning?",
        answers: ["Too much data", "Model performing well on training data but poorly on new data", "Perfect model performance", "Model size too large"],
        correct: 1
    },
    {
        question: "What is a hyperparameter?",
        answers: ["Very important parameter", "Configuration setting for learning algorithms", "Maximum parameter value", "Parameter above normal range"],
        correct: 1
    },
    {
        question: "What is transfer learning?",
        answers: ["Moving data between systems", "Using pre-trained models for new tasks", "Learning during transfers", "Transferring knowledge between people"],
        correct: 1
    },
    {
        question: "What is generative AI?",
        answers: ["AI for power generation", "AI that creates new content", "General artificial intelligence", "Generic AI applications"],
        correct: 1
    },
    {
        question: "What is a transformer in AI?",
        answers: ["Robot that transforms", "Neural network architecture for processing sequences", "Data conversion tool", "Power transformer"],
        correct: 1
    },
    {
        question: "What is federated learning?",
        answers: ["Learning in federal buildings", "Training models across multiple devices without centralizing data", "Government-sponsored learning", "Unified learning approach"],
        correct: 1
    },
    {
        question: "What is adversarial training?",
        answers: ["Competitive learning", "Training models to be robust against adversarial attacks", "Aggressive training methods", "Training enemies"],
        correct: 1
    },
    {
        question: "What is a GAN (Generative Adversarial Network)?",
        answers: ["Gaming AI Network", "Two neural networks competing to generate realistic data", "General AI Network", "Guaranteed Accuracy Network"],
        correct: 1
    },
    {
        question: "What is attention mechanism in AI?",
        answers: ["AI paying attention", "Technique allowing models to focus on relevant parts of input", "Concentration training", "User attention tracking"],
        correct: 1
    },
    {
        question: "What is ensemble learning?",
        answers: ["Musical AI", "Combining multiple models for better performance", "Group learning", "Orchestra of algorithms"],
        correct: 1
    },
    {
        question: "What is dimensionality reduction?",
        answers: ["Making things smaller", "Reducing number of features while preserving information", "Simplifying dimensions", "Size optimization"],
        correct: 1
    },
    {
        question: "What is cross-validation?",
        answers: ["Double-checking results", "Technique for assessing model performance on unseen data", "Validating across platforms", "Multi-step verification"],
        correct: 1
    },
    {
        question: "What is gradient descent?",
        answers: ["Going downhill", "Optimization algorithm for finding minimum error", "Steep decline", "Mathematical slope"],
        correct: 1
    },
    {
        question: "What is a recurrent neural network (RNN)?",
        answers: ["Recurring network issues", "Neural network for sequential data processing", "Network that repeats", "Circular neural network"],
        correct: 1
    },
    {
        question: "What is LSTM?",
        answers: ["Last Time Memory", "Long Short-Term Memory network", "Latest Technology Method", "Learning System Training Model"],
        correct: 1
    },
    {
        question: "What is few-shot learning?",
        answers: ["Learning with limited shots", "Learning from very few examples", "Quick learning sessions", "Minimal training approach"],
        correct: 1
    },
    {
        question: "What is zero-shot learning?",
        answers: ["Learning without trying", "Making predictions on unseen classes without training examples", "No learning required", "Instant learning"],
        correct: 1
    },
    {
        question: "What is meta-learning?",
        answers: ["Learning about learning", "Learning to learn new tasks quickly", "Advanced learning", "Learning beyond basics"],
        correct: 1
    },
    {
        question: "What is continual learning?",
        answers: ["Non-stop learning", "Learning new tasks without forgetting old ones", "Ongoing education", "Perpetual training"],
        correct: 1
    },
    {
        question: "What is multi-task learning?",
        answers: ["Learning many things", "Training single model on multiple related tasks", "Multitasking skills", "Parallel learning"],
        correct: 1
    },
    {
        question: "What is self-supervised learning?",
        answers: ["Learning alone", "Learning from unlabeled data by creating supervision signals", "Independent learning", "Automatic learning"],
        correct: 1
    },
    {
        question: "What is contrastive learning?",
        answers: ["Learning opposites", "Learning by comparing similar and dissimilar examples", "Conflicting learning", "Comparative studies"],
        correct: 1
    },
    {
        question: "What is domain adaptation?",
        answers: ["Adapting to new domains", "Transferring knowledge between different but related domains", "Website adaptation", "Field specialization"],
        correct: 1
    },
    {
        question: "What is active learning?",
        answers: ["Energetic learning", "Algorithm selecting most informative data points for labeling", "Hands-on learning", "Interactive learning"],
        correct: 1
    },
    {
        question: "What is curriculum learning?",
        answers: ["School curriculum", "Training models with examples of increasing difficulty", "Educational planning", "Course design"],
        correct: 1
    },
    {
        question: "What is representation learning?",
        answers: ["Learning to represent", "Learning useful features automatically from data", "Symbolic learning", "Learning representations"],
        correct: 1
    },
    {
        question: "What is interpretability in AI?",
        answers: ["Language translation", "Ability to understand and explain AI decisions", "Easy interpretation", "Clear communication"],
        correct: 1
    },
    {
        question: "What is differential privacy?",
        answers: ["Different privacy levels", "Privacy technique adding noise to protect individual data", "Varied privacy settings", "Discriminating privacy"],
        correct: 1
    },
    {
        question: "What is edge AI?",
        answers: ["AI on the edge", "Running AI algorithms on local devices rather than cloud", "Advanced AI", "Cutting-edge AI"],
        correct: 1
    },
    {
        question: "What is AutoML?",
        answers: ["Automatic cars", "Automated machine learning pipeline creation", "Auto manufacturing ML", "Automotive ML"],
        correct: 1
    },
    {
        question: "What is neural architecture search (NAS)?",
        answers: ["Searching for networks", "Automated design of neural network architectures", "Network discovery", "Architecture hunting"],
        correct: 1
    },
    {
        question: "What is knowledge distillation?",
        answers: ["Extracting knowledge", "Training smaller models using larger teacher models", "Information processing", "Knowledge extraction"],
        correct: 1
    },
    {
        question: "What is quantization in AI?",
        answers: ["Measuring quantities", "Reducing precision of model weights to improve efficiency", "Quantum computing", "Size measurement"],
        correct: 1
    },
    {
        question: "What is pruning in neural networks?",
        answers: ["Cutting branches", "Removing unnecessary connections to reduce model size", "Garden maintenance", "Tree trimming"],
        correct: 1
    },
    {
        question: "What is knowledge graphs?",
        answers: ["Educational charts", "Structured representation of entities and relationships", "Information graphics", "Learning diagrams"],
        correct: 1
    },
    {
        question: "What is causal inference?",
        answers: ["Cause investigation", "Determining cause-and-effect relationships from data", "Causal reasoning", "Effect analysis"],
        correct: 1
    }
];

// Current millionaire questions for the round (5 randomly selected)
let millionaireLevels = [];

// AI or Human Image Data (10 local webp images)
const aiHumanImages = [
    {
        image: "1.webp",
        answer: "ai",
        explanation: "This image was generated by AI. Look for telltale signs like overly perfect details, unnatural lighting, or subtle inconsistencies that AI often produces."
    },
    {
        image: "2.webp", 
        answer: "ai",
        explanation: "This is an AI-generated image. AI images often have perfect symmetry, impossibly smooth textures, or details that look impressive but break down under close inspection."
    },
    {
        image: "3.webp",
        answer: "human",
        explanation: "This is a real photograph taken by a human. Notice the natural imperfections, realistic lighting, and authentic details that AI struggles to replicate convincingly."
    },
    {
        image: "4.webp",
        answer: "human", 
        explanation: "This photograph was taken by a human. Real photos typically show natural variations in lighting, authentic expressions, and the chaotic beauty of real life."
    },
    {
        image: "5.webp",
        answer: "ai",
        explanation: "This image was created using AI. AI-generated content often has subtle artifacts, impossible geometries, or details that seem 'too perfect' to be natural."
    },
    {
        image: "6.webp",
        answer: "ai",
        explanation: "This is an AI-generated image. Look for signs like inconsistent art styles within the same image, strange hand positions, or lighting that doesn't make physical sense."
    },
    {
        image: "7.webp",
        answer: "human",
        explanation: "This is a genuine human-created photograph. Real images capture authentic moments with natural imperfections and realistic physics that AI finds difficult to replicate."
    },
    {
        image: "888.jpg",
        answer: "human",
        explanation: "This photograph was taken by a human. Human photography often includes random background elements, natural wear and tear, and imperfect compositions that feel authentic."
    },
    {
        image: "9.webp", 
        answer: "human",
        explanation: "This is a real photograph. Notice how it captures genuine human expressions, natural lighting conditions, and the unpredictable elements of real-world photography."
    },
    {
        image: "10.webp",
        answer: "ai", 
        explanation: "This image was generated by AI. AI images may appear stunning at first glance but often contain subtle impossibilities or artifacts that give them away upon closer examination."
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

// Utility function to randomly select questions
function selectRandomQuestions(questionPool, count) {
    const shuffled = [...questionPool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// Quiz Challenge Functions
function startQuiz() {
    playerName = document.getElementById('quiz-player-name').value.trim();
    if (!playerName) {
        alert('Please enter your name!');
        return;
    }
    
    // Select 5 random questions for this round
    quizQuestions = selectRandomQuestions(allQuizQuestions, 5);
    
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
    document.getElementById('quiz-final-score').textContent = `${currentScore}/5`;
    
    // Save score to leaderboard
    saveScore('quiz', playerName, currentScore, 5);
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
    
    // Select 5 random questions for this round
    millionaireLevels = selectRandomQuestions(allQuizQuestions, 5);
    
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
    saveScore('millionaire', playerName, millionaireLevel, 5);
}

function resetMillionaire() {
    document.getElementById('millionaire-end').classList.add('hidden');
    document.getElementById('millionaire-start').classList.remove('hidden');
    document.getElementById('millionaire-player-name').value = '';
}

// AI or Human Game Functions
let aiHumanQuestion = 0;
let aiHumanScore = 0;
let selectedAiHumanImages = []; // Array to hold the 5 randomly selected images

function startAiHumanGame() {
    playerName = document.getElementById('ai-human-player-name').value.trim();
    if (!playerName) {
        alert('Please enter your name!');
        return;
    }
    
    // Select 5 random images for this round
    selectedAiHumanImages = selectRandomQuestions(aiHumanImages, 5);
    
    aiHumanQuestion = 0;
    aiHumanScore = 0;
    
    document.getElementById('ai-human-start').classList.add('hidden');
    document.getElementById('ai-human-playing').classList.remove('hidden');
    
    showAiHumanQuestion();
}

function showAiHumanQuestion() {
    const imageData = selectedAiHumanImages[aiHumanQuestion];
    
    document.getElementById('ai-human-question-num').textContent = aiHumanQuestion + 1;
    document.getElementById('ai-human-score').textContent = aiHumanScore;
    
    // Set the image source
    document.getElementById('ai-human-image').src = imageData.image;
    
    // Reset answer buttons
    const buttons = document.querySelectorAll('#ai-human-answers .answer-btn');
    buttons.forEach(btn => {
        btn.classList.remove('correct', 'incorrect', 'disabled');
        btn.style.pointerEvents = 'auto';
    });
    
    document.getElementById('ai-human-feedback').classList.add('hidden');
}

function selectAiHumanAnswer(selectedAnswer) {
    const imageData = selectedAiHumanImages[aiHumanQuestion];
    const buttons = document.querySelectorAll('#ai-human-answers .answer-btn');
    const feedback = document.getElementById('ai-human-feedback');
    
    // Disable all buttons
    buttons.forEach(btn => {
        btn.classList.add('disabled');
        btn.style.pointerEvents = 'none';
    });
    
    // Highlight correct answer
    buttons.forEach(btn => {
        if (btn.onclick.toString().includes(imageData.answer)) {
            btn.classList.add('correct');
        } else if (btn.onclick.toString().includes(selectedAnswer) && selectedAnswer !== imageData.answer) {
            btn.classList.add('incorrect');
        }
    });
    
    if (selectedAnswer === imageData.answer) {
        aiHumanScore++;
        feedback.textContent = `Correct! 🎉 ${imageData.explanation}`;
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = `Incorrect! This was ${imageData.answer.toUpperCase()}-generated. ${imageData.explanation}`;
        feedback.className = 'feedback incorrect';
    }
    
    feedback.classList.remove('hidden');
    
    setTimeout(() => {
        aiHumanQuestion++;
        if (aiHumanQuestion < selectedAiHumanImages.length) {
            showAiHumanQuestion();
        } else {
            endAiHumanGame();
        }
    }, 2000); // 2 second delay to read explanation
}

function endAiHumanGame() {
    document.getElementById('ai-human-playing').classList.add('hidden');
    document.getElementById('ai-human-end').classList.remove('hidden');
    document.getElementById('ai-human-final-score').textContent = `${aiHumanScore}/5`;
    
    // Save score to leaderboard (now always out of 5)
    saveScore('ai-human', playerName, aiHumanScore, 5);
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
