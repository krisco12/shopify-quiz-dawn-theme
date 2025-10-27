// Quiz Application JavaScript

class ADHDQuiz {
    constructor() {
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.scores = {
            type_1: 0,
            type_2: 0,
            type_3: 0,
            type_4: 0
        };
        
        // Quiz data
        this.questions = [
            {
                id: 1,
                category: "attention_regulation",
                question: "When working on tasks that don't particularly interest you, how do you typically experience your focus?",
                options: [
                    {
                        text: "I struggle to maintain attention and find my mind wandering frequently",
                        scores: {"type_1": 3, "type_2": 1, "type_3": 2, "type_4": 1}
                    },
                    {
                        text: "I can focus but feel restless and need to move or fidget",
                        scores: {"type_1": 1, "type_2": 3, "type_3": 2, "type_4": 1}
                    },
                    {
                        text: "It varies greatly - sometimes I can focus, sometimes I can't sit still",
                        scores: {"type_1": 1, "type_2": 1, "type_3": 3, "type_4": 1}
                    },
                    {
                        text: "I get easily frustrated or overwhelmed, which affects my ability to concentrate",
                        scores: {"type_1": 1, "type_2": 1, "type_3": 1, "type_4": 3}
                    }
                ]
            },
            {
                id: 2,
                category: "working_memory",
                question: "How do you typically handle remembering and managing multiple pieces of information at once?",
                options: [
                    {
                        text: "I often lose track of details and need to write everything down immediately",
                        scores: {"type_1": 3, "type_2": 1, "type_3": 2, "type_4": 1}
                    },
                    {
                        text: "I remember the big picture but may act quickly without considering all details",
                        scores: {"type_1": 1, "type_2": 3, "type_3": 2, "type_4": 1}
                    },
                    {
                        text: "It depends on my energy level and interest - very inconsistent",
                        scores: {"type_1": 1, "type_2": 1, "type_3": 3, "type_4": 1}
                    },
                    {
                        text: "I get overwhelmed when there's too much information and may shut down",
                        scores: {"type_1": 1, "type_2": 1, "type_3": 1, "type_4": 3}
                    }
                ]
            },
            {
                id: 3,
                category: "impulse_control",
                question: "In conversations, how do you typically engage with others?",
                options: [
                    {
                        text: "I'm a good listener but may appear distracted even when I'm paying attention",
                        scores: {"type_1": 3, "type_2": 1, "type_3": 1, "type_4": 1}
                    },
                    {
                        text: "I get excited and may interrupt or jump ahead in conversations",
                        scores: {"type_1": 1, "type_2": 3, "type_3": 2, "type_4": 1}
                    },
                    {
                        text: "Sometimes I'm very engaged, other times I'm quiet - it varies",
                        scores: {"type_1": 1, "type_2": 1, "type_3": 3, "type_4": 1}
                    },
                    {
                        text: "I'm very attuned to others' emotions and may take on their feelings",
                        scores: {"type_1": 1, "type_2": 1, "type_3": 1, "type_4": 3}
                    }
                ]
            },
            {
                id: 4,
                category: "organization",
                question: "How do you approach organizing your living or work space?",
                options: [
                    {
                        text: "I have good intentions but struggle to maintain organized systems consistently",
                        scores: {"type_1": 3, "type_2": 1, "type_3": 2, "type_4": 1}
                    },
                    {
                        text: "I prefer organized spaces but may create chaos when I'm working on something exciting",
                        scores: {"type_1": 1, "type_2": 3, "type_3": 2, "type_4": 1}
                    },
                    {
                        text: "My organization varies wildly - sometimes very tidy, sometimes complete chaos",
                        scores: {"type_1": 1, "type_2": 1, "type_3": 3, "type_4": 1}
                    },
                    {
                        text: "My emotional state affects my organization - stressed equals messy",
                        scores: {"type_1": 1, "type_2": 1, "type_3": 1, "type_4": 3}
                    }
                ]
            },
            {
                id: 5,
                category: "emotional_regulation",
                question: "How do you typically experience and manage your emotions throughout the day?",
                options: [
                    {
                        text: "I tend to be relatively steady but may feel frustrated about productivity or forgetfulness",
                        scores: {"type_1": 3, "type_2": 1, "type_3": 1, "type_4": 1}
                    },
                    {
                        text: "I feel emotions strongly and may react quickly, but bounce back relatively fast",
                        scores: {"type_1": 1, "type_2": 3, "type_3": 2, "type_4": 1}
                    },
                    {
                        text: "My emotions can shift quickly and unpredictably throughout the day",
                        scores: {"type_1": 1, "type_2": 1, "type_3": 3, "type_4": 2}
                    },
                    {
                        text: "I feel emotions very deeply and intensely, which can be both wonderful and overwhelming",
                        scores: {"type_1": 1, "type_2": 1, "type_3": 1, "type_4": 3}
                    }
                ]
            }
        ];
        
        this.resultTypes = {
            "type_1": {
                "name": "The Strategic Planner",
                "subtitle": "Inattentive Profile",
                "description": "You have a brilliant mind that works differently. Your challenges center around attention regulation, working memory, and organization - but you have incredible depth of focus when interested.",
                "characteristics": [
                    "Deep focus on interests but difficulty with routine tasks",
                    "Strong analytical thinking but struggles with time management",
                    "Creative problem-solving but challenges with follow-through",
                    "Excellent listening skills but may appear distracted",
                    "Rich inner world but difficulty with external organization"
                ],
                "percentage": "60-70% of adults with ADHD",
                "color": "#2D5AA0"
            },
            "type_2": {
                "name": "The Dynamic Innovator", 
                "subtitle": "Hyperactive-Impulsive Profile",
                "description": "You're a natural leader with boundless energy and quick thinking. Your challenges involve impulse control and emotional regulation, but you thrive in dynamic environments.",
                "characteristics": [
                    "High energy and enthusiasm for new projects",
                    "Quick decision-making but may act without full consideration",
                    "Natural leadership abilities but may interrupt others",
                    "Thrives under pressure but struggles with routine",
                    "Emotionally expressive but may have intense reactions"
                ],
                "percentage": "10-15% of adults with ADHD",
                "color": "#48CAE4"
            },
            "type_3": {
                "name": "The Adaptive Multi-Tasker",
                "subtitle": "Combined Profile", 
                "description": "You experience the full spectrum of ADHD traits. This means more challenges but also access to both deep focus abilities and dynamic energy when properly channeled.",
                "characteristics": [
                    "Variable attention depending on interest and environment",
                    "Alternates between periods of high energy and mental fatigue",
                    "Can hyperfocus intensely but also gets easily distracted",
                    "Strong creative abilities but struggles with consistent execution", 
                    "Emotionally sensitive with rich empathy but may have mood swings"
                ],
                "percentage": "20-30% of adults with ADHD",
                "color": "#F72585"
            },
            "type_4": {
                "name": "The Emotionally Aware",
                "subtitle": "High Emotional Dysregulation",
                "description": "You feel everything deeply and have strong empathy. Your emotional sensitivity is both a superpower and a challenge, requiring specific strategies for emotional regulation.",
                "characteristics": [
                    "High emotional intelligence and empathy",
                    "Strong intuition and ability to read others",
                    "May experience emotions more intensely than others",
                    "Excellent in crisis situations but may struggle with daily stressors",
                    "Creative and innovative thinking patterns"
                ],
                "percentage": "34-70% of adults with ADHD have emotional dysregulation",
                "color": "#06D6A0"
            }
        };
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.updateQuestionCounter();
    }
    
    bindEvents() {
        // Start quiz button - Fix event binding
        const startBtn = document.getElementById('startQuizBtn');
        if (startBtn) {
            startBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.startQuiz();
            });
        }
        
        // Navigation buttons
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.previousQuestion();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.nextQuestion();
            });
        }
        
        // Email form - Fix form submission
        const emailForm = document.getElementById('emailForm');
        if (emailForm) {
            emailForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleEmailSubmit();
            });
        }
        
        // Result actions
        const shareBtn = document.getElementById('shareBtn');
        const retakeBtn = document.getElementById('retakeBtn');
        
        if (shareBtn) {
            shareBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.shareResults();
            });
        }
        
        if (retakeBtn) {
            retakeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.retakeQuiz();
            });
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            this.handleKeyboardNavigation(e);
        });
    }
    
    startQuiz() {
        console.log('Starting quiz...');
        this.showScreen('quiz');
        this.renderQuestion();
    }
    
    renderQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        const questionTitle = document.getElementById('questionTitle');
        const optionsContainer = document.getElementById('optionsContainer');
        
        if (!question || !questionTitle || !optionsContainer) {
            console.error('Missing question elements');
            return;
        }
        
        // Update question
        questionTitle.textContent = question.question;
        
        // Clear previous options
        optionsContainer.innerHTML = '';
        
        // Render options
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option.text;
            button.setAttribute('data-option-index', index);
            button.setAttribute('type', 'button');
            
            // Add click event listener directly
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.selectOption(index);
            });
            
            // Check if this option was previously selected
            if (this.answers[question.id] === index) {
                button.classList.add('selected');
            }
            
            optionsContainer.appendChild(button);
        });
        
        this.updateProgress();
        this.updateNavigation();
    }
    
    selectOption(optionIndex) {
        const question = this.questions[this.currentQuestionIndex];
        
        // Store answer
        this.answers[question.id] = optionIndex;
        
        // Update UI
        const options = document.querySelectorAll('.option-btn');
        options.forEach((btn, index) => {
            btn.classList.toggle('selected', index === optionIndex);
        });
        
        // Enable next button
        const nextBtn = document.getElementById('nextBtn');
        if (nextBtn) {
            nextBtn.disabled = false;
        }
        
        // Auto-advance after short delay for better UX
        setTimeout(() => {
            if (this.currentQuestionIndex < this.questions.length - 1) {
                this.nextQuestion();
            } else {
                this.finishQuiz();
            }
        }, 800);
    }
    
    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.renderQuestion();
        } else {
            this.finishQuiz();
        }
    }
    
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.renderQuestion();
        }
    }
    
    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        const progressFill = document.getElementById('progressFill');
        const currentQuestion = document.getElementById('currentQuestion');
        const totalQuestions = document.getElementById('totalQuestions');
        
        if (progressFill) {
            progressFill.style.width = progress + '%';
        }
        if (currentQuestion) {
            currentQuestion.textContent = this.currentQuestionIndex + 1;
        }
        if (totalQuestions) {
            totalQuestions.textContent = this.questions.length;
        }
    }
    
    updateNavigation() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        if (prevBtn) {
            // Previous button visibility
            if (this.currentQuestionIndex === 0) {
                prevBtn.style.visibility = 'hidden';
            } else {
                prevBtn.style.visibility = 'visible';
            }
        }
        
        if (nextBtn) {
            // Next button state
            const currentQuestion = this.questions[this.currentQuestionIndex];
            const hasAnswer = this.answers.hasOwnProperty(currentQuestion.id);
            nextBtn.disabled = !hasAnswer;
            
            // Update next button text
            if (this.currentQuestionIndex === this.questions.length - 1) {
                nextBtn.textContent = 'Finish';
            } else {
                nextBtn.textContent = 'Next â†’';
            }
        }
    }
    
    updateQuestionCounter() {
        const totalQuestions = document.getElementById('totalQuestions');
        if (totalQuestions) {
            totalQuestions.textContent = this.questions.length;
        }
    }
    
    finishQuiz() {
        console.log('Quiz finished, showing email capture');
        this.showScreen('email-capture');
    }
    
    handleEmailSubmit() {
        const emailInput = document.getElementById('email');
        if (!emailInput) {
            console.error('Email input not found');
            return;
        }
        
        const email = emailInput.value.trim();
        console.log('Email submitted:', email);
        
        if (this.validateEmail(email)) {
            this.showLoading();
            
            // Simulate processing time
            setTimeout(() => {
                this.calculateResults();
                this.hideLoading();
                this.showResults();
            }, 2000);
        } else {
            alert('Please enter a valid email address.');
        }
    }
    
    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    calculateResults() {
        // Reset scores
        this.scores = {
            type_1: 0,
            type_2: 0,
            type_3: 0,
            type_4: 0
        };
        
        // Calculate scores based on answers
        Object.keys(this.answers).forEach(questionId => {
            const questionIndex = parseInt(questionId) - 1;
            const question = this.questions[questionIndex];
            const selectedOptionIndex = this.answers[questionId];
            const selectedOption = question.options[selectedOptionIndex];
            
            // Add scores for this option
            Object.keys(selectedOption.scores).forEach(type => {
                this.scores[type] += selectedOption.scores[type];
            });
        });
        
        // Determine the dominant type
        this.dominantType = Object.keys(this.scores).reduce((a, b) => 
            this.scores[a] > this.scores[b] ? a : b
        );
        
        console.log('Calculated scores:', this.scores);
        console.log('Dominant type:', this.dominantType);
    }
    
    showResults() {
        const resultType = this.resultTypes[this.dominantType];
        
        if (!resultType) {
            console.error('Result type not found:', this.dominantType);
            return;
        }
        
        // Update result content
        const elements = {
            resultType: document.getElementById('resultType'),
            resultSubtitle: document.getElementById('resultSubtitle'),
            resultDescription: document.getElementById('resultDescription'),
            resultPercentage: document.getElementById('resultPercentage'),
            characteristicsList: document.getElementById('characteristicsList'),
            resultCard: document.getElementById('resultCard')
        };
        
        if (elements.resultType) {
            elements.resultType.textContent = resultType.name;
        }
        if (elements.resultSubtitle) {
            elements.resultSubtitle.textContent = resultType.subtitle;
        }
        if (elements.resultDescription) {
            elements.resultDescription.textContent = resultType.description;
        }
        if (elements.resultPercentage) {
            elements.resultPercentage.textContent = resultType.percentage;
        }
        
        // Update characteristics
        if (elements.characteristicsList) {
            elements.characteristicsList.innerHTML = '';
            resultType.characteristics.forEach(characteristic => {
                const li = document.createElement('li');
                li.textContent = characteristic;
                elements.characteristicsList.appendChild(li);
            });
        }
        
        // Update result card color accent
        if (elements.resultCard) {
            elements.resultCard.style.borderTopColor = resultType.color;
            elements.resultCard.style.borderTopWidth = '4px';
        }
        
        this.showScreen('results');
    }
    
    shareResults() {
        if (!this.dominantType) {
            console.error('No results to share');
            return;
        }
        
        const resultType = this.resultTypes[this.dominantType];
        const text = `I just discovered I'm "${resultType.name}" on the KC Theory ADHD Focus Type Quiz! Take the quiz to discover your unique ADHD profile.`;
        
        if (navigator.share) {
            navigator.share({
                title: 'KC Theory ADHD Focus Type Quiz Results',
                text: text,
                url: window.location.href
            }).catch(err => console.log('Error sharing:', err));
        } else {
            // Fallback to clipboard
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text + ' ' + window.location.href).then(() => {
                    alert('Results copied to clipboard!');
                }).catch(err => {
                    console.log('Clipboard error:', err);
                    alert('Share text: ' + text);
                });
            } else {
                alert('Share text: ' + text);
            }
        }
    }
    
    retakeQuiz() {
        // Reset quiz state
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.scores = {
            type_1: 0,
            type_2: 0,
            type_3: 0,
            type_4: 0
        };
        this.dominantType = null;
        
        // Clear email field
        const emailInput = document.getElementById('email');
        if (emailInput) {
            emailInput.value = '';
        }
        
        // Show landing page
        this.showScreen('landing');
    }
    
    showScreen(screenId) {
        console.log('Showing screen:', screenId);
        
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show target screen
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
            
            // Focus management for accessibility
            const firstFocusable = targetScreen.querySelector('button, input, [tabindex="0"]');
            if (firstFocusable) {
                setTimeout(() => firstFocusable.focus(), 100);
            }
        } else {
            console.error('Screen not found:', screenId);
        }
    }
    
    showLoading() {
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay) {
            loadingOverlay.classList.add('active');
        }
    }
    
    hideLoading() {
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay) {
            loadingOverlay.classList.remove('active');
        }
    }
    
    handleKeyboardNavigation(e) {
        const activeScreen = document.querySelector('.screen.active');
        
        if (activeScreen && activeScreen.id === 'quiz') {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                this.previousQuestion();
            } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                const nextBtn = document.getElementById('nextBtn');
                if (nextBtn && !nextBtn.disabled) {
                    this.nextQuestion();
                }
            } else if (e.key >= '1' && e.key <= '4') {
                e.preventDefault();
                const optionIndex = parseInt(e.key) - 1;
                const options = document.querySelectorAll('.option-btn');
                if (options[optionIndex]) {
                    this.selectOption(optionIndex);
                }
            }
        }
    }
}

// Initialize the quiz when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing quiz...');
    window.adhdQuiz = new ADHDQuiz();
});