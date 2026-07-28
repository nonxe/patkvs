// ─── Tab Navigation ────────────────────────────
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('page-' + tab.dataset.page).classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// ─── MCQ Data ──────────────────────────────────
const mcqData = [
    {
        q: "BMI is calculated by dividing weight in kg by —",
        opts: ["Height in cm", "Height in m squared", "Height in m", "Weight in lbs"],
        ans: 1
    },
    {
        q: "The Kraus-Weber test measures —",
        opts: ["Cardiovascular endurance", "Minimum muscular strength", "Flexibility only", "Reaction time"],
        ans: 1
    },
    {
        q: "Kyphosis is a deformity of the —",
        opts: ["Knee", "Upper back (thoracic spine)", "Foot arch", "Neck"],
        ans: 1
    },
    {
        q: "Shuttle run primarily tests —",
        opts: ["Strength", "Endurance", "Agility", "Balance"],
        ans: 2
    },
    {
        q: "600m run/walk test measures —",
        opts: ["Speed", "Agility", "Cardiovascular endurance", "Flexibility"],
        ans: 2
    },
    {
        q: "Which is NOT one of the 7 Cs of communication?",
        opts: ["Clear", "Creative", "Concise", "Courteous"],
        ans: 1
    },
    {
        q: "Body language falls under which type of communication?",
        opts: ["Verbal", "Written", "Non-verbal", "Visual"],
        ans: 2
    },
    {
        q: "A semantic barrier in communication refers to —",
        opts: ["Physical noise", "Language/meaning confusion", "Emotional bias", "Network issues"],
        ans: 1
    },
    {
        q: "Active listening involves —",
        opts: ["Interrupting to clarify", "Paying full attention and giving feedback", "Only hearing words", "Taking notes silently"],
        ans: 1
    },
    {
        q: "Sit and Reach test measures —",
        opts: ["Speed", "Lower back & hamstring flexibility", "Upper body strength", "Agility"],
        ans: 1
    }
];

// ─── PYQ Data ──────────────────────────────────
const pyqData = [
    {
        q: "What is the ideal BMI range for a healthy individual?",
        opts: ["14.5 – 17.5", "18.5 – 24.9", "25.0 – 29.9", "30.0 – 34.9"],
        ans: 1
    },
    {
        q: "Lordosis affects which region of the spine?",
        opts: ["Cervical", "Thoracic", "Lumbar", "Sacral"],
        ans: 2
    },
    {
        q: "Flat foot is also known as —",
        opts: ["Knock knee", "Bow leg", "Pes planus", "Scoliosis"],
        ans: 2
    },
    {
        q: "The 50m standing start test measures —",
        opts: ["Flexibility", "Endurance", "Speed", "Coordination"],
        ans: 2
    },
    {
        q: "Partial curl-up test evaluates —",
        opts: ["Arm strength", "Abdominal strength", "Leg power", "Balance"],
        ans: 1
    },
    {
        q: "Feedback in communication should be —",
        opts: ["Delayed and vague", "Specific, timely, and constructive", "Only negative", "Given once a year"],
        ans: 1
    },
    {
        q: "Which is an example of visual communication?",
        opts: ["Phone call", "Email", "Pie chart", "Voice note"],
        ans: 2
    },
    {
        q: "Psychological barriers include —",
        opts: ["Poor lighting", "Technical jargon", "Anxiety and prejudice", "Distance between people"],
        ans: 2
    }
];

// ─── Quiz Engine ───────────────────────────────
function createQuiz(containerId, data) {
    const container = document.getElementById(containerId);
    let current = 0;
    let score = 0;
    let answered = false;

    function render() {
        const d = data[current];
        const pct = ((current) / data.length) * 100;

        container.innerHTML = `
            <div class="q-progress">
                <span class="q-progress-text">${current + 1} / ${data.length}</span>
                <span class="q-score">${score} correct</span>
            </div>
            <div class="q-bar-wrap"><div class="q-bar" style="width:${pct}%"></div></div>
            <div class="q-body">
                <div class="q-text">${d.q}</div>
                <div class="q-options">
                    ${d.opts.map((o, i) => `<button class="q-opt" data-i="${i}">${o}</button>`).join('')}
                </div>
            </div>
            <div class="q-footer">
                <button class="q-btn" id="${containerId}-next" disabled>Next</button>
            </div>
        `;

        answered = false;
        const opts = container.querySelectorAll('.q-opt');
        const nextBtn = container.querySelector(`#${containerId}-next`);

        opts.forEach(btn => {
            btn.addEventListener('click', () => {
                if (answered) return;
                answered = true;
                const idx = parseInt(btn.dataset.i);

                opts.forEach(b => b.disabled = true);

                if (idx === d.ans) {
                    btn.classList.add('correct');
                    score++;
                } else {
                    btn.classList.add('wrong');
                    opts[d.ans].classList.add('correct');
                }

                container.querySelector('.q-score').textContent = score + ' correct';
                nextBtn.disabled = false;
            });
        });

        nextBtn.addEventListener('click', () => {
            if (current < data.length - 1) {
                current++;
                render();
            } else {
                showResult();
            }
        });
    }

    function showResult() {
        const pct = Math.round((score / data.length) * 100);
        container.innerHTML = `
            <div class="q-result">
                <div class="q-result-score">${pct}%</div>
                <div class="q-result-label">${score} out of ${data.length} correct</div>
                <div class="q-result-msg">${pct >= 80 ? 'Well prepared.' : pct >= 50 ? 'Review the notes once more.' : 'Go through the PDFs again.'}</div>
                <button class="q-btn-outline" id="${containerId}-retry">Try Again</button>
            </div>
        `;
        container.querySelector(`#${containerId}-retry`).addEventListener('click', () => {
            current = 0;
            score = 0;
            render();
        });
    }

    render();
}

// ─── Init ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    createQuiz('mcq-container', mcqData);
    createQuiz('pyq-container', pyqData);
});
