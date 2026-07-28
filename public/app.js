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

// ─── 100 MCQs ──────────────────────────────────
const mcqData = [
    // ══════ ASSESSMENT OF STUDENTS (1–50) ══════
    { q:"BMI is calculated by dividing weight (kg) by —", opts:["Height in cm","Height² in m²","Height in m","Age in years"], ans:1 },
    { q:"The Kraus-Weber test measures —", opts:["Cardiovascular endurance","Minimum muscular fitness","Flexibility only","Reaction time"], ans:1 },
    { q:"How many items are in the Kraus-Weber test?", opts:["4","5","6","8"], ans:2 },
    { q:"Kyphosis is a deformity of the —", opts:["Lumbar spine","Thoracic spine","Cervical spine","Foot arch"], ans:1 },
    { q:"Lordosis affects the — region of the spine.", opts:["Thoracic","Cervical","Lumbar","Sacral"], ans:2 },
    { q:"Sideways curvature of the spine is called —", opts:["Kyphosis","Lordosis","Scoliosis","Flat foot"], ans:2 },
    { q:"Knock-knees is medically known as —", opts:["Genu Varum","Genu Valgum","Pes Planus","Pes Cavus"], ans:1 },
    { q:"Bow legs is medically termed —", opts:["Genu Valgum","Genu Varum","Pes Planus","Scoliosis"], ans:1 },
    { q:"Flat foot is also called —", opts:["Genu Varum","Pes Cavus","Pes Planus","Genu Valgum"], ans:2 },
    { q:"Corrective exercise for kyphosis is —", opts:["Halasana","Dhanurasana","Padmasana","Shavasana"], ans:1 },
    { q:"Corrective asana for lordosis is —", opts:["Chakrasana","Paschimottanasana","Gomukhasana","Vrikshasana"], ans:1 },
    { q:"Corrective exercise for scoliosis includes —", opts:["Padmasana","Trikonasana & swimming","Shavasana","Vajrasana"], ans:1 },
    { q:"Corrective measure for knock-knees is —", opts:["Walking on toes","Horse riding & Padmasana","Swimming","Halasana"], ans:1 },
    { q:"Corrective exercise for flat foot is —", opts:["Walking on sand/toes","Padmasana","Dhanurasana","Trikonasana"], ans:0 },
    { q:"Corrective measure for bow legs is —", opts:["Padmasana","Walking on inner edges of feet","Chakrasana","Trikonasana"], ans:1 },
    { q:"Shuttle run test measures —", opts:["Strength","Endurance","Agility","Balance"], ans:2 },
    { q:"600m run/walk test measures —", opts:["Speed","Agility","Cardiovascular endurance","Flexibility"], ans:2 },
    { q:"50m standing start test measures —", opts:["Flexibility","Endurance","Speed","Coordination"], ans:2 },
    { q:"Sit and Reach test measures —", opts:["Speed","Lower back & hamstring flexibility","Upper body strength","Agility"], ans:1 },
    { q:"Partial curl-up test evaluates —", opts:["Arm strength","Abdominal strength","Leg power","Balance"], ans:1 },
    { q:"Standing Broad Jump measures —", opts:["Speed","Agility","Explosive leg power","Flexibility"], ans:2 },
    { q:"BMI of a healthy person falls in the range —", opts:["14.5–17.5","18.5–24.9","25.0–29.9","30.0–34.9"], ans:1 },
    { q:"A BMI above 30 is classified as —", opts:["Underweight","Normal","Overweight","Obese"], ans:3 },
    { q:"BMI was popularized by —", opts:["Isaac Newton","Adolphe Quetelet","Carl Lewis","J.P. Muller"], ans:1 },
    { q:"Which is NOT a spinal deformity?", opts:["Kyphosis","Lordosis","Scoliosis","Flat foot"], ans:3 },
    { q:"A complete print of the sole on a surface indicates —", opts:["Knock knees","Bow legs","Flat foot","Scoliosis"], ans:2 },
    { q:"Cause of flat foot includes —", opts:["Excessive running","Obesity & prolonged standing","Swimming","Cycling"], ans:1 },
    { q:"Formative assessment is done —", opts:["At the end of term","During the learning process","Once a year","Only in sports"], ans:1 },
    { q:"Summative assessment evaluates learning —", opts:["During practice","At the end of a unit/course","Before enrollment","During warm-up"], ans:1 },
    { q:"Purpose of fitness record cards is to —", opts:["Grade academics","Track physical growth & fitness","Select athletes only","Reduce PE hours"], ans:1 },
    { q:"Anthropometric measurements include —", opts:["IQ scores","Height, weight, body circumference","Academic grades","Attendance records"], ans:1 },
    { q:"Motor fitness refers to —", opts:["Mental alertness","Ability to perform motor tasks efficiently","Academic performance","Social skills"], ans:1 },
    { q:"Warm-up before fitness tests is necessary to —", opts:["Waste time","Prevent injuries & prepare muscles","Reduce performance","Increase fatigue"], ans:1 },
    { q:"Push-up test measures —", opts:["Flexibility","Upper body strength & endurance","Speed","Balance"], ans:1 },
    { q:"Modified push-up test differs by resting on —", opts:["Toes","Knees","Elbows","Head"], ans:1 },
    { q:"In standing broad jump, distance is measured from take-off line to —", opts:["Farthest point","Nearest heel mark","Head position","Hand position"], ans:1 },
    { q:"Performance-based assessment evaluates —", opts:["Written exams only","Ability to perform physical tasks","Attendance","Behavior"], ans:1 },
    { q:"Rubrics help in assessment by providing —", opts:["Random grades","Clear evaluation criteria","No guidelines","Student names"], ans:1 },
    { q:"Self-assessment promotes —", opts:["Dependency","Reflection & self-regulation","Laziness","Cheating"], ans:1 },
    { q:"Validity in assessment means the test measures —", opts:["Nothing specific","What it claims to measure","Random traits","Only speed"], ans:1 },
    { q:"Reliability in assessment means —", opts:["Different results each time","Consistent results on repeated testing","Biased results","Subjective grading"], ans:1 },
    { q:"Objectivity in testing refers to —", opts:["Personal opinion-based scoring","Unbiased and standardized scoring","Random marking","Favoritism"], ans:1 },
    { q:"4x10m shuttle run requires the student to —", opts:["Run straight 40m","Run back and forth changing direction","Jump over hurdles","Walk slowly"], ans:1 },
    { q:"Flexibility is best measured by —", opts:["50m dash","Sit and Reach test","600m run","Push-ups"], ans:1 },
    { q:"Abdominal strength is tested by —", opts:["Standing broad jump","Sit and reach","Partial curl-up","Shuttle run"], ans:2 },
    { q:"In Kraus-Weber test, failing even one item means —", opts:["Partial pass","Need for retest only","Overall failure","Bonus marks"], ans:2 },
    { q:"Postural deformities are caused by —", opts:["Proper exercise","Habitual wrong postures & muscle imbalance","Good nutrition","Active lifestyle"], ans:1 },
    { q:"Which asana helps correct round shoulders (kyphosis)?", opts:["Shavasana","Chakrasana","Padmasana","Vajrasana"], ans:1 },
    { q:"Peer assessment means evaluation by —", opts:["Teachers","Parents","Fellow students","Principal"], ans:2 },
    { q:"Which fitness component does the 600m run primarily test?", opts:["Muscular strength","Speed","Cardiovascular endurance","Flexibility"], ans:2 },

    // ══════ COMMUNICATION SKILLS (51–100) ══════
    { q:"Communication is a — process.", opts:["One-way","Two-way","Random","Static"], ans:1 },
    { q:"Which is NOT one of the 7 Cs of communication?", opts:["Clear","Creative","Concise","Courteous"], ans:1 },
    { q:"Body language is a form of —", opts:["Verbal communication","Written communication","Non-verbal communication","Visual communication"], ans:2 },
    { q:"The 4 basic communication skills are —", opts:["LSRW","ABCD","RSVP","READ"], ans:0 },
    { q:"LSRW stands for —", opts:["Learn, Speak, Read, Write","Listen, Speak, Read, Write","Listen, Sing, Read, Write","Learn, Sign, Run, Walk"], ans:1 },
    { q:"Feedback in communication ensures —", opts:["Message is ignored","Message was received and understood","Conversation ends","Sender is criticized"], ans:1 },
    { q:"A semantic barrier refers to —", opts:["Physical noise","Language/meaning confusion","Emotional bias","Network issues"], ans:1 },
    { q:"Active listening involves —", opts:["Interrupting frequently","Paying full attention & giving feedback","Only hearing words","Multitasking"], ans:1 },
    { q:"Which is an example of visual communication?", opts:["Phone call","Email","Pie chart","Voice note"], ans:2 },
    { q:"Psychological barriers include —", opts:["Poor lighting","Technical jargon","Anxiety and prejudice","Long distance"], ans:2 },
    { q:"Written communication is important for —", opts:["Immediate response","Future reference & record","Body language","Facial expressions"], ans:1 },
    { q:"An interrogative sentence —", opts:["States a fact","Asks a question","Gives a command","Expresses emotion"], ans:1 },
    { q:"An imperative sentence —", opts:["States a fact","Asks a question","Gives a command or request","Expresses surprise"], ans:2 },
    { q:"A declarative sentence —", opts:["Asks a question","States a fact","Gives a command","Shows emotion"], ans:1 },
    { q:"An exclamatory sentence expresses —", opts:["A command","A fact","A question","Strong emotion"], ans:3 },
    { q:"Which is a physical barrier to communication?", opts:["Prejudice","Noise","Jargon","Fear"], ans:1 },
    { q:"Cultural barriers arise due to —", opts:["Same language","Different customs & traditions","Good technology","Clear speech"], ans:1 },
    { q:"Email etiquette includes —", opts:["Using all caps","No subject line","Clear subject, polite tone, proofread","Slang language"], ans:2 },
    { q:"The sender in communication cycle is —", opts:["The one who receives","The one who initiates the message","The channel","The feedback"], ans:1 },
    { q:"Channel in communication means —", opts:["The feedback","The medium used to send message","The receiver","The noise"], ans:1 },
    { q:"Effective communication requires —", opts:["Information overload","Clarity and precision","Use of jargon","Ignoring feedback"], ans:1 },
    { q:"Constructive feedback should be —", opts:["Vague and delayed","Specific, timely, and polite","Only negative","Ignored"], ans:1 },
    { q:"Non-verbal communication includes —", opts:["Letters","Emails","Gestures & facial expressions","Reports"], ans:2 },
    { q:"Which is NOT a method of communication?", opts:["Verbal","Non-verbal","Visual","Mechanical"], ans:3 },
    { q:"To overcome communication barriers, one should —", opts:["Use complex words","Ignore the receiver","Use simple, clear language","Avoid eye contact"], ans:2 },
    { q:"Eye contact during conversation shows —", opts:["Disinterest","Confidence and attention","Rudeness","Fear"], ans:1 },
    { q:"MINTS rule is used for —", opts:["Mathematics","Capitalization rules","Grammar only","Punctuation"], ans:1 },
    { q:"M in MINTS stands for —", opts:["Minutes","Months","Marks","Materials"], ans:1 },
    { q:"Parts of speech include —", opts:["Only nouns","Nouns, verbs, adjectives, adverbs etc.","Only verbs","Only pronouns"], ans:1 },
    { q:"Verbal communication includes —", opts:["Body language only","Oral and written forms","Gestures only","Silence"], ans:1 },
    { q:"The RESPECT acronym helps with —", opts:["Writing skills","Active listening","Public speaking","Reading speed"], ans:1 },
    { q:"R in RESPECT stands for —", opts:["Read carefully","Remove distractions","Repeat words","Run quickly"], ans:1 },
    { q:"Noise in communication refers to —", opts:["Loud music only","Anything that distorts the message","Clear speech","Good feedback"], ans:1 },
    { q:"Empathy in communication means —", opts:["Ignoring others","Understanding others' feelings","Talking loudly","Writing formally"], ans:1 },
    { q:"Which 'C' means the message should be polite?", opts:["Clear","Concise","Courteous","Concrete"], ans:2 },
    { q:"Which 'C' means the message should not be vague?", opts:["Coherent","Complete","Concrete","Correct"], ans:2 },
    { q:"Which 'C' means the message should be brief?", opts:["Clear","Concise","Complete","Coherent"], ans:1 },
    { q:"Which 'C' means the message must be factually accurate?", opts:["Courteous","Concise","Complete","Correct"], ans:3 },
    { q:"Coherent communication means —", opts:["Random points","Logical flow of ideas","Very long message","Use of jargon"], ans:1 },
    { q:"Complete communication includes —", opts:["Half the information","All necessary information","Only greetings","Vague statements"], ans:1 },
    { q:"Formal communication is used in —", opts:["Friend group chats","Professional/official settings","Family dinners","Playground"], ans:1 },
    { q:"Informal communication is also called —", opts:["Official communication","Grapevine","Written communication","Visual communication"], ans:1 },
    { q:"Which improves reading comprehension?", opts:["Skipping paragraphs","Reading regularly & expanding vocabulary","Reading only headlines","Avoiding books"], ans:1 },
    { q:"Public speaking requires —", opts:["Mumbling","Clear voice, eye contact, confidence","Reading from notes only","Avoiding audience"], ans:1 },
    { q:"A good paragraph should have —", opts:["No structure","Topic sentence, body, concluding sentence","Only one word","Random thoughts"], ans:1 },
    { q:"Encoding in communication means —", opts:["Receiving the message","Converting thoughts into words/symbols","Giving feedback","Deleting message"], ans:1 },
    { q:"Decoding in communication means —", opts:["Sending the message","Interpreting the received message","Ignoring the message","Encoding again"], ans:1 },
    { q:"Kinesics is the study of —", opts:["Sound patterns","Body movements & gestures","Written text","Mathematical formulas"], ans:1 },
    { q:"Proxemics deals with —", opts:["Tone of voice","Use of personal space in communication","Written grammar","Eye color"], ans:1 },
];

// ─── Short Answer Questions (2, 3, 4 markers mixed) ───
const shortQuestions = [
    // Assessment of Students
    { marks:2, q:"Define BMI. Write its formula.", a:"BMI (Body Mass Index) is a measure of body composition based on height and weight. Formula: BMI = Weight (kg) ÷ [Height (m)]². It helps classify individuals as underweight, normal, overweight, or obese." },
    { marks:2, q:"What is the Kraus-Weber test?", a:"The Kraus-Weber test is a battery of 6 test items designed to measure minimum muscular strength and flexibility of key muscle groups (abdominals, hip flexors, back muscles). Failing even one item means overall failure." },
    { marks:2, q:"Define motor fitness.", a:"Motor fitness is the ability of an individual to perform motor tasks efficiently. It includes components like speed, agility, endurance, flexibility, and explosive power." },
    { marks:2, q:"What is the purpose of the 50m standing start?", a:"The 50m standing start measures speed and acceleration. The student runs 50 metres from a standing position and the time taken is recorded." },
    { marks:2, q:"Differentiate between formative and summative assessment.", a:"Formative assessment is ongoing evaluation during the learning process to provide feedback and improvement. Summative assessment evaluates student learning at the end of a unit or course for grading purposes." },
    { marks:2, q:"What is the importance of record keeping in Physical Education?", a:"Record keeping helps track student progress over time, identify areas needing improvement, set fitness goals, and maintain objective data for evaluation and grading." },
    { marks:2, q:"What is scoliosis?", a:"Scoliosis is a postural deformity characterized by lateral (sideways) curvature of the spine. It can appear as a C-shaped or S-shaped curve. Corrective exercises include Trikonasana and swimming." },
    { marks:3, q:"Explain the BMI classification with ranges.", a:"BMI Classification:\n• Below 18.5 — Underweight\n• 18.5 to 24.9 — Normal weight\n• 25.0 to 29.9 — Overweight\n• 30.0 and above — Obese\nBMI = Weight (kg) ÷ Height² (m²). It is used as a screening tool for body composition assessment in students." },
    { marks:3, q:"List three common postural deformities and their corrective exercises.", a:"1. Kyphosis (round back) — Dhanurasana, Chakrasana, back-strengthening exercises\n2. Lordosis (swayback) — Paschimottanasana, Halasana, forward bending exercises\n3. Scoliosis (lateral curve) — Trikonasana, swimming, hanging exercises" },
    { marks:3, q:"Explain the procedure for the Sit and Reach test.", a:"1. The student removes shoes and sits with legs extended, feet flat against the test box\n2. Hands are placed one on top of the other, palms down\n3. The student reaches forward slowly along the measuring scale without bouncing\n4. The farthest point reached (held for 2 seconds) is recorded\n5. Two trials are given and the best score is noted. It measures lower back and hamstring flexibility." },
    { marks:3, q:"Describe any three motor fitness tests and their purpose.", a:"1. 600m Run/Walk — measures cardiovascular endurance\n2. Shuttle Run (4×10m) — measures agility (ability to change direction quickly)\n3. Partial Curl-Up — measures abdominal strength and endurance\nEach test requires proper warm-up before administration and standardized procedures for validity." },
    { marks:4, q:"Explain knock-knees and bow legs with causes, identification, and corrective measures.", a:"Knock-Knees (Genu Valgum):\n• Knees touch each other when standing with feet apart\n• Causes: Weak ligaments, obesity, deficiency of calcium/vitamin D\n• Corrective measures: Horse riding, Padmasana, Gomukhasana, pillow between knees while sleeping\n\nBow Legs (Genu Varum):\n• Wide gap between knees when standing with feet together\n• Causes: Rickets, forced early walking, vitamin deficiency\n• Corrective measures: Walking on inner edges of feet, balancing exercises on toes" },
    { marks:4, q:"Explain the Kraus-Weber test in detail including its items.", a:"The Kraus-Weber test was developed in the 1950s to assess minimum muscular fitness. It consists of 6 items:\n1. Abdominal Plus (A+) — Lie supine, hands behind neck, perform a sit-up with legs straight (tests abdominal + psoas muscles)\n2. Abdominal Minus (A-) — Lie supine, hands behind neck, perform a sit-up with knees bent (tests abdominal muscles)\n3. Psoas — Lie supine, lift both legs 10 inches and hold for 10 seconds (tests hip flexors)\n4. Upper Back — Lie prone, lift chest off ground with hands behind neck and hold for 10 seconds (tests upper back)\n5. Lower Back — Lie prone, lift legs off ground and hold for 10 seconds (tests lower back)\n6. Floor Touch — Stand, bend forward and touch floor with fingertips, hold for 3 seconds (tests flexibility)\nFailing even one item = overall failure." },
    { marks:4, q:"Explain the importance of physical fitness tests in schools with examples.", a:"Physical fitness tests are important in schools because:\n1. Assessment — They provide objective data on students' fitness levels (e.g., BMI for body composition, 600m run for endurance)\n2. Progress Tracking — Regular testing tracks improvement over time through fitness record cards\n3. Health Screening — Identifies postural deformities (kyphosis, scoliosis), obesity, or muscular weakness early\n4. Goal Setting — Helps students set personal fitness targets based on test results\n5. Curriculum Planning — Teachers can design PE programs based on identified weaknesses\nExamples: Sit and Reach (flexibility), Partial Curl-Up (abdominal strength), Standing Broad Jump (leg power)" },

    // Communication Skills
    { marks:2, q:"Define communication.", a:"Communication is a two-way process of exchanging information, ideas, or messages between a sender and a receiver through a chosen channel (spoken, written, or non-verbal). Feedback completes the cycle." },
    { marks:2, q:"Name the four basic communication skills.", a:"The four basic communication skills are LSRW — Listening, Speaking, Reading, and Writing. These are the foundation of effective communication in both personal and professional settings." },
    { marks:2, q:"What is active listening?", a:"Active listening is the practice of giving full, undivided attention to the speaker to understand their message accurately. It involves maintaining eye contact, nodding, asking clarifying questions, and providing appropriate feedback." },
    { marks:2, q:"List the elements of a communication cycle.", a:"The communication cycle consists of: Sender (initiates message), Message (information conveyed), Channel (medium used — email, speech, etc.), Receiver (receives the message), and Feedback (receiver's response confirming understanding)." },
    { marks:2, q:"What is the difference between verbal and non-verbal communication?", a:"Verbal communication uses words — either oral (speaking, phone) or written (emails, letters). Non-verbal communication uses body language, gestures, facial expressions, eye contact, and posture without words." },
    { marks:2, q:"What are the four types of sentences?", a:"1. Declarative — states a fact (The sun rises in the east.)\n2. Interrogative — asks a question (Where are you going?)\n3. Imperative — gives a command/request (Please close the door.)\n4. Exclamatory — expresses strong emotion (What a beautiful day!)" },
    { marks:2, q:"What does the MINTS rule refer to?", a:"MINTS is a capitalization rule: M — Months (June, March), I — the word 'I', N — Names (Delhi, Rahul), T — Titles (Dr., Mr., Mrs.), S — Starting letter of a sentence. These must always be capitalized." },
    { marks:3, q:"Explain the 7 Cs of effective communication.", a:"The 7 Cs are:\n1. Clear — easy to understand, no ambiguity\n2. Concise — brief and to the point, no unnecessary words\n3. Concrete — specific and definite, backed by facts\n4. Correct — factually accurate, no grammatical errors\n5. Coherent — logical flow of ideas, well-organized\n6. Complete — includes all necessary information\n7. Courteous — polite, respectful, and considerate of the receiver" },
    { marks:3, q:"Explain any three barriers to communication.", a:"1. Physical barriers — noise, distance, poor technology, bad network that prevent clear message transmission\n2. Semantic barriers — use of jargon, technical language, or words with multiple meanings causing confusion\n3. Psychological barriers — anxiety, prejudice, stress, emotions, or preconceived notions that distort message interpretation" },
    { marks:3, q:"How can barriers to communication be overcome?", a:"1. Use simple, clear language — avoid jargon and complex vocabulary\n2. Minimize distractions — turn off phones, choose quiet settings\n3. Practice active listening — give full attention, ask questions\n4. Provide constructive feedback — confirm understanding\n5. Be aware of cultural differences — respect diverse backgrounds\n6. Keep emotions in check — stay objective and calm" },
    { marks:3, q:"Explain the RESPECT acronym for active listening.", a:"RESPECT stands for:\nR — Remove distractions (put away phone, close laptop)\nE — Eye contact (maintain with the speaker)\nS — Show you are listening (nod, lean forward)\nP — Pay attention (focus fully on the speaker)\nE — Empathize (understand their feelings and perspective)\nC — Clarify doubts (ask questions if unclear)\nT — Tune in (wait for the speaker to finish before responding)" },
    { marks:4, q:"Differentiate between verbal and non-verbal communication with examples.", a:"Verbal Communication:\n• Uses words (oral or written)\n• Examples: conversations, speeches, emails, letters, reports\n• Can be recorded and referenced\n• Suitable for detailed/complex information\n\nNon-Verbal Communication:\n• Without words — uses body cues\n• Examples: facial expressions, gestures, posture, eye contact, tone of voice\n• Often unconscious and harder to control\n• Conveys emotions and attitudes more effectively\n• According to studies, 55% of communication is non-verbal (body language), 38% is tone, and only 7% is actual words (Mehrabian's rule)." },
    { marks:4, q:"Write a detailed note on barriers to communication and how to overcome them.", a:"Barriers to Communication:\n1. Physical — noise, poor lighting, distance, faulty equipment\n2. Semantic/Language — jargon, slang, ambiguous words, different languages\n3. Psychological — stress, anxiety, prejudice, closed-mindedness, fear\n4. Cultural — different customs, values, traditions, social norms\n5. Organizational — rigid hierarchy, unclear roles, information overload\n\nWays to Overcome:\n• Use clear, simple, specific language\n• Choose appropriate channel and timing\n• Practice active listening using RESPECT\n• Give and seek constructive feedback\n• Be culturally sensitive and inclusive\n• Manage emotions and stay objective\n• Reduce noise and physical distractions\n• Use visual aids to supplement verbal messages" },
    { marks:4, q:"Explain the communication cycle with a diagram description.", a:"The communication cycle has the following stages:\n1. Sender — The person who wants to convey a message (idea originates)\n2. Encoding — Sender converts thoughts into words, symbols, or gestures\n3. Message — The actual content being communicated\n4. Channel — Medium of transmission (face-to-face, phone, email, letter)\n5. Receiver — The person who receives the message\n6. Decoding — Receiver interprets and understands the message\n7. Feedback — Receiver sends a response back to the sender\n\nThe cycle is circular — feedback from the receiver becomes input for the sender, making communication a continuous two-way process. Noise can interfere at any stage." },
];

// ─── Quiz Engine ───────────────────────────────
function createQuiz(containerId, data) {
    const container = document.getElementById(containerId);
    let current = 0;
    let score = 0;
    let answered = false;

    function render() {
        const d = data[current];
        const pct = (current / data.length) * 100;

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

// ─── Short Answer Renderer ────────────────────
function renderShortQuestions(containerId, data) {
    const container = document.getElementById(containerId);
    container.innerHTML = data.map((item, i) => `
        <div class="sa-item">
            <div class="sa-header" onclick="this.parentElement.classList.toggle('open')">
                <div class="sa-info">
                    <span class="sa-badge">${item.marks}M</span>
                    <span class="sa-q">${item.q}</span>
                </div>
                <span class="sa-toggle">+</span>
            </div>
            <div class="sa-answer">
                <div class="sa-answer-inner">${item.a.replace(/\n/g, '<br>')}</div>
            </div>
        </div>
    `).join('');
}

// ─── Init ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    createQuiz('mcq-container', mcqData);
    renderShortQuestions('questions-container', shortQuestions);
});
