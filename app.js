// Tab Switching Logic for PDFs
function switchTab(type) {
    const tabPat = document.getElementById('tab-pat');
    const tabEs = document.getElementById('tab-es');
    const pdfTitle = document.getElementById('pdf-title');
    const pdfSubtitle = document.getElementById('pdf-subtitle');
    const pdfDownloadLink = document.getElementById('pdf-download-link');
    const pdfOpenLink = document.getElementById('pdf-open-link');
    const pdfFallbackLink = document.getElementById('pdf-fallback-link');
    const pdfFrame = document.getElementById('pdf-frame');

    if (type === 'pat') {
        tabPat.classList.add('active');
        tabEs.classList.remove('active');

        pdfTitle.textContent = 'Physical_Activity_Trainer_XII.PDF';
        pdfSubtitle.textContent = 'Tomorrow\'s Exam Focus: UNIT 1. ASSESSMENT OF STUDENTS';
        
        const path = 'public/pdfs/Physical_Activity_Trainer_XII.pdf';
        pdfFrame.src = path + '#toolbar=1';
        pdfDownloadLink.href = path;
        pdfOpenLink.href = path;
        pdfFallbackLink.href = path;

    } else if (type === 'es') {
        tabEs.classList.add('active');
        tabPat.classList.remove('active');

        pdfTitle.textContent = 'Employability_Skills_XII.PDF';
        pdfSubtitle.textContent = 'Tomorrow\'s Exam Focus: COMMUNICATION SKILLS';

        const path = 'public/pdfs/Employability_Skills_XII.pdf';
        pdfFrame.src = path + '#toolbar=1';
        pdfDownloadLink.href = path;
        pdfOpenLink.href = path;
        pdfFallbackLink.href = path;
    }
}

// Interactive Practice Quiz Data (Focusing on Unit 1 Assessment & Communication Skills)
const quizData = [
    {
        question: "What is the formula used to calculate Body Mass Index (BMI) for student physical assessments?",
        options: [
            "BMI = Weight (kg) / Height (m)",
            "BMI = Weight (kg) / [Height (m)]²",
            "BMI = [Weight (kg)]² / Height (m)",
            "BMI = Height (cm) / Weight (kg)"
        ],
        answer: 1,
        explanation: "Body Mass Index (BMI) is calculated by dividing body mass in kilograms by the square of body height in meters (kg/m²)."
    },
    {
        question: "Which of the following physical fitness tests is designed to evaluate minimum muscular strength of the abdominal and hip flexor muscles?",
        options: [
            "Kraus-Weber Test",
            "50m Dash",
            "Shuttle Run",
            "Harvard Step Test"
        ],
        answer: 0,
        explanation: "The Kraus-Weber Test consists of six items used to measure key trunk and hip flexor muscle strength."
    },
    {
        question: "Which of the '7 Cs of Effective Communication' ensures that a message is specific and clear rather than vague?",
        options: [
            "Courteous",
            "Concrete",
            "Coherent",
            "Complete"
        ],
        answer: 1,
        explanation: "Concrete communication means being clear, specific, and backed by solid facts rather than general statements."
    },
    {
        question: "In non-verbal communication, posture, eye contact, and facial expressions are collectively referred to as:",
        options: [
            "Body Language",
            "Verbal Code",
            "Semantic Noise",
            "Linguistic Phonology"
        ],
        answer: 0,
        explanation: "Body language encompasses all non-verbal signals transmitted through gestures, facial expressions, and physical posture."
    },
    {
        question: "What is the primary objective of keeping systematic Fitness Record Cards for students in Physical Activity Training?",
        options: [
            "To grade overall academic performance only",
            "To monitor student physical growth, identify postural deformities, and track fitness progress over time",
            "To select students only for national competitions",
            "To reduce physical education class hours"
        ],
        answer: 1,
        explanation: "Fitness record cards provide longitudinal evaluation of height, weight, BMI, posture, and motor fitness parameters."
    }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

function loadQuizQuestion() {
    const container = document.getElementById('quiz-container');
    const progressBar = document.getElementById('quiz-progress-bar');
    
    // Update Progress Bar
    const progressPercent = ((currentQuestion + 1) / quizData.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    const q = quizData[currentQuestion];
    
    container.innerHTML = `
        <div class="quiz-question-box">
            <span style="font-size: 0.85rem; color: var(--primary); font-weight: 600; text-transform: uppercase;">
                Question ${currentQuestion + 1} of ${quizData.length}
            </span>
            <h3>${q.question}</h3>
            <div class="quiz-options">
                ${q.options.map((opt, idx) => `
                    <button class="option-btn" onclick="selectOption(${idx})">
                        <i class="fa-regular fa-circle" id="opt-icon-${idx}"></i>
                        <span>${opt}</span>
                    </button>
                `).join('')}
            </div>
            <div class="quiz-footer">
                <div id="explanation-space"></div>
                <button class="btn btn-primary" id="next-btn" onclick="submitAnswer()" disabled>
                    Submit Answer &rarr;
                </button>
            </div>
        </div>
    `;

    selectedOption = null;
}

function selectOption(idx) {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, index) => {
        btn.classList.remove('selected');
        const icon = document.getElementById(`opt-icon-${index}`);
        icon.className = 'fa-regular fa-circle';
    });

    buttons[idx].classList.add('selected');
    document.getElementById(`opt-icon-${idx}`).className = 'fa-solid fa-circle-dot';
    selectedOption = idx;

    const nextBtn = document.getElementById('next-btn');
    nextBtn.disabled = false;
}

function submitAnswer() {
    const q = quizData[currentQuestion];
    const buttons = document.querySelectorAll('.option-btn');
    const explanationSpace = document.getElementById('explanation-space');
    const nextBtn = document.getElementById('next-btn');

    // Disable options
    buttons.forEach(btn => btn.style.pointerEvents = 'none');

    if (selectedOption === q.answer) {
        buttons[selectedOption].classList.add('correct');
        score++;
    } else {
        buttons[selectedOption].classList.add('wrong');
        buttons[q.answer].classList.add('correct');
    }

    explanationSpace.innerHTML = `
        <div class="quiz-explanation">
            <strong><i class="fa-solid fa-lightbulb"></i> Explanation:</strong> ${q.explanation}
        </div>
    `;

    if (currentQuestion < quizData.length - 1) {
        nextBtn.innerHTML = 'Next Question &rarr;';
        nextBtn.onclick = () => {
            currentQuestion++;
            loadQuizQuestion();
        };
    } else {
        nextBtn.innerHTML = 'See Final Score &rarr;';
        nextBtn.onclick = showQuizResults;
    }
}

function showQuizResults() {
    const container = document.getElementById('quiz-container');
    const percent = Math.round((score / quizData.length) * 100);

    container.innerHTML = `
        <div style="text-align: center; padding: 20px 0;">
            <div style="font-size: 3rem; color: var(--primary); margin-bottom: 10px;">
                <i class="fa-solid fa-trophy"></i>
            </div>
            <h3 style="font-size: 1.8rem; font-family: var(--font-heading); margin-bottom: 10px;">
                Quiz Completed!
            </h3>
            <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 20px;">
                You scored <strong>${score} out of ${quizData.length}</strong> (${percent}%)
            </p>
            <p style="font-size: 0.95rem; color: var(--secondary); margin-bottom: 30px;">
                ${percent >= 80 ? '🌟 Excellent! You are fully prepared for tomorrow\'s exam on Unit 1 & Communication Skills!' : '👍 Good effort! Review the notes above and attempt the quiz again.'}
            </p>
            <button class="btn btn-primary" onclick="restartQuiz()">
                <i class="fa-solid fa-rotate-right"></i> Retake Practice Quiz
            </button>
        </div>
    `;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedOption = null;
    loadQuizQuestion();
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    loadQuizQuestion();
});
