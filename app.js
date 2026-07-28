// Tab Navigation
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('page-' + tab.dataset.page).classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// ══════ 100 MCQs ══════
const mcqData = [
    // ── ASSESSMENT OF STUDENTS (1–50) ──
    { q:"The word 'assess' comes from the Latin word 'assidere' which means —", opts:["To examine","To sit beside","To measure","To evaluate"], ans:1 },
    { q:"Assessment should answer two questions: (1) What was learnt? and (2) —", opts:["Who learnt it?","How well was it learnt?","When was it learnt?","Where was it learnt?"], ans:1 },
    { q:"The most common form of assessment in physical education classes is —", opts:["Written test","Peer observation","Teacher observation","Self-assessment"], ans:2 },
    { q:"Which observation technique is most valuable for teachers in PE assessment?", opts:["Front of class","Back of the wall technique and scanning","Close-up recording","Group discussion"], ans:1 },
    { q:"Homework in PE can include —", opts:["Only written assignments","Reports or observation of sporting events","Only fitness activities","Only reading textbooks"], ans:1 },
    { q:"Peer observation involves —", opts:["Teacher watching students","Students observing other students' performance","Parents evaluating students","Principal observing class"], ans:1 },
    { q:"In peer observation, children should observe —", opts:["All cues at once","Only one cue at a time","At least five cues","No cues"], ans:1 },
    { q:"Self-assessment provides a unique opportunity to evaluate —", opts:["Only motor skills","Larger components of a skill or beginning use of a skill","Only cognitive ability","Only attendance"], ans:1 },
    { q:"Which factor category includes age, developmental level, and physical disabilities?", opts:["School factors","Teacher factors","Physical factors","Environmental factors"], ans:2 },
    { q:"'Does the student feel safe and/or connected at school?' falls under —", opts:["Physical factors","School factors","Teacher factors","Parent factors"], ans:1 },
    { q:"Teacher factors that influence assessment include —", opts:["Student's age","Physical and mental state of teacher and familiarity with test","Weather conditions","School infrastructure"], ans:1 },
    { q:"A checklist is a tool designed to —", opts:["Increase errors","Reduce errors and ensure consistency","Replace rubrics","Grade students randomly"], ans:1 },
    { q:"The word 'rubric' comes from the Latin word for —", opts:["Blue","Green","Red","White"], ans:2 },
    { q:"A rubric is a coherent set of —", opts:["Random grades","Criteria with descriptions of performance levels","Test questions","Student names"], ans:1 },
    { q:"In a 3-point grading scale, Grade A means —", opts:["Developing","Needs Development","Proficient","Average"], ans:2 },
    { q:"In a 3-point grading scale, Grade B means —", opts:["Proficient","Developing","Needs Development","Excellent"], ans:1 },
    { q:"In a 5-point grading scale, Grade A (5 points) means —", opts:["Good","Very Good","Average","Excellent"], ans:3 },
    { q:"In a 5-point grading scale, Grade E (1 point) means —", opts:["Excellent","Good","Needs Improvement","Very Good"], ans:2 },
    { q:"A benchmark is needed to —", opts:["Replace rubrics","Justify if a student's fitness level is enough for their age group","Eliminate assessments","Reduce testing time"], ans:1 },
    { q:"To create a benchmark, data should be collected from —", opts:["Only one school","Different schools and different states for the same age group","Only one class","Only boys"], ans:1 },
    { q:"Formative evaluation is —", opts:["Done at the end of course","An ongoing process to monitor learning progress","Done once a year","Only for grading"], ans:1 },
    { q:"Summative evaluation evaluates —", opts:["Daily progress","The outcome of the program at the end","Only homework","Only attendance"], ans:1 },
    { q:"Diagnostic evaluation helps to —", opts:["Grade students","Find out the exact problem and causes of learning difficulty","Replace summative evaluation","Skip assessments"], ans:1 },
    { q:"Qualitative assessment looks for changes in —", opts:["Test scores only","Quality of the skill as performed","Number of repetitions","Time taken"], ans:1 },
    { q:"Qualitative assessment is based on —", opts:["Norms and tables","Experience, judgment, and rubrics","Only written tests","Random selection"], ans:1 },
    { q:"Quantitative assessment compares student scores to —", opts:["Teacher's opinion","A table of norms","Other subjects","Random benchmarks"], ans:1 },
    { q:"Aerobic capacity means the capacity to sustain activity for longer duration —", opts:["Without oxygen","In the presence of oxygen","Without movement","In water only"], ans:1 },
    { q:"Anaerobic capacity means maximum force generated with —", opts:["Full oxygen","Lesser amount of oxygen","No movement","Slow breathing"], ans:1 },
    { q:"The test used to measure aerobic capacity is —", opts:["30m sprint","Standing broad jump","600m run/walk or Beep test","Sit and reach"], ans:2 },
    { q:"Anaerobic capacity is measured by —", opts:["Beep test","600m run","30-meter run test","Curl-ups"], ans:2 },
    { q:"Flexibility is measured by —", opts:["Standing broad jump","Curl-ups","Sit and Reach test","Medicine ball throw"], ans:2 },
    { q:"Abdominal strength is measured by —", opts:["Sit and reach","Standing broad jump","Sit-ups (curl-ups) test","Beep test"], ans:2 },
    { q:"Lower body explosive strength is measured by —", opts:["Curl-ups","Standing broad jump","Beep test","Sit and reach"], ans:1 },
    { q:"Upper body explosive strength is measured by —", opts:["Curl-ups","Standing broad jump","Overhead medicine ball throw","Sit and reach"], ans:2 },
    { q:"During assessment planning, endurance test should ideally be done —", opts:["With all other tests","On a single day with no other tests if possible","Last in the sequence only","Without warm-up"], ans:1 },
    { q:"Pre-assessment preparation includes —", opts:["Skipping warm-up","Students should know and practice assessments beforehand","No parent consent needed","Random scheduling"], ans:1 },
    { q:"On assessment day, first you should —", opts:["Start testing immediately","Visit the assessment area and ensure it is safe","Skip attendance","Avoid warm-up"], ans:1 },
    { q:"Post assessment includes —", opts:["Deleting data","Uploading checked data on excel sheets and generating reports","Ignoring errors","No PTM"], ans:1 },
    { q:"PTM stands for —", opts:["Physical Training Method","Parent Teacher Meeting","Performance Test Module","Planning Teaching Method"], ans:1 },
    { q:"In a PTM, the meeting should be —", opts:["One-way lecture","A two-way conversation","Only about complaints","Only about grades"], ans:1 },
    { q:"Remedial measures after evaluation should be —", opts:["Same for all students","Specific to different skills and fitness capacities","Only for top performers","Ignored"], ans:1 },
    { q:"Which activity helps improve aerobic capacity?", opts:["Lifting weights only","Walking, running, swimming, cycling, dancing","Sitting stretches","Balance exercises only"], ans:1 },
    { q:"Jumping rope burns up to — calories per minute.", opts:["5","8","13","20"], ans:2 },
    { q:"Assessment 'for' learning focuses on —", opts:["Final grades only","The process of the skill","Attendance","Discipline"], ans:1 },
    { q:"Height and weight in relation to age is a good indicator of —", opts:["Intelligence","Health and development","Academic grades","Social skills"], ans:1 },
    { q:"The running skill rubric assesses criteria including arm/leg opposition, toes forward, arm swing, and —", opts:["Speed only","Feet landing heel to toe","Jumping height","Distance covered"], ans:1 },
    { q:"In the running rubric, Grade C (Needs Development) means —", opts:["Runs perfectly","Stops midway, falls down, only two correct elements","Demonstrates all elements","Three out of four correct"], ans:1 },
    { q:"Norms for male and female for the same test will be —", opts:["Always the same","Different","Not created","Based on height only"], ans:1 },
    { q:"More data points for creating benchmarks means —", opts:["Less accuracy","More accurate norms","No change","More confusion"], ans:1 },
    { q:"After creating norms, they must be tested through —", opts:["Guessing","Pilot testing for authentication","Immediate publication","Student voting"], ans:1 },

    // ── COMMUNICATION SKILLS (51–100) ──
    { q:"Communication is a — process of exchanging information.", opts:["One-way","Random","Two-way","Static"], ans:2 },
    { q:"The four key communication skills (LSRW) are —", opts:["Learning, Singing, Reading, Walking","Listening, Speaking, Reading, Writing","Looking, Speaking, Running, Writing","Listening, Sitting, Reading, Watching"], ans:1 },
    { q:"In the communication cycle, encoding means —", opts:["Receiving the message","Converting thoughts into words or symbols","Giving feedback","Deleting the message"], ans:1 },
    { q:"Decoding in communication means —", opts:["Sending the message","Interpreting the received message","Encoding again","Ignoring the message"], ans:1 },
    { q:"Feedback is important because it helps in knowing whether —", opts:["The sender is happy","The receiver has understood the message or not","The channel works","The noise is reduced"], ans:1 },
    { q:"A clear statement is one which —", opts:["Is very long","Conveys the exact message","Uses complex words","Has no time mentioned"], ans:1 },
    { q:"A concise statement is —", opts:["Very lengthy","Appropriately brief or to the point","Full of unnecessary detail","Repeated multiple times"], ans:1 },
    { q:"An accurate statement is one that is —", opts:["Vague","Emotional","Factual — its correctness can be verified","Based on opinions"], ans:2 },
    { q:"Eye contact in communication is a form of —", opts:["Verbal communication","Written communication","Body language","Visual aids"], ans:2 },
    { q:"Avoiding eye contact could mean —", opts:["You are interested","You do not want to listen to the speaker","You are paying attention","You agree"], ans:1 },
    { q:"To avoid distraction during listening, you should —", opts:["Keep checking your phone","Reduce ringtone or switch phone off","Glance at your watch","Talk to others"], ans:1 },
    { q:"Feedback should be given in a way that is —", opts:["Rude and direct","Polite so the person is not hurt or offended","Only negative","Delayed by weeks"], ans:1 },
    { q:"The five stages of active listening in order are —", opts:["Responding, Receiving, Understanding, Remembering, Evaluating","Receiving, Understanding, Remembering, Evaluating, Responding","Understanding, Receiving, Responding, Evaluating, Remembering","Evaluating, Responding, Receiving, Understanding, Remembering"], ans:1 },
    { q:"'R' in RESPECT stands for —", opts:["Read carefully","Remove distractions","Repeat words","Run quickly"], ans:1 },
    { q:"'E' (first) in RESPECT stands for —", opts:["Evaluate","Empathise","Eye contact","Educate"], ans:2 },
    { q:"'S' in RESPECT stands for —", opts:["Sit quietly","Show that you are listening through gestures","Speak loudly","Sleep well"], ans:1 },
    { q:"'C' in RESPECT stands for —", opts:["Complain","Criticize","Clarify doubts","Close eyes"], ans:2 },
    { q:"'T' in RESPECT stands for —", opts:["Talk immediately","Tune to the timing of the speaker","Type notes","Take a break"], ans:1 },
    { q:"Being pre-occupied during a conversation is a barrier because —", opts:["You listen better","You may not be listening carefully","It helps concentration","It improves understanding"], ans:1 },
    { q:"The acronym MINTS helps with —", opts:["Grammar rules","Capitalization rules","Punctuation only","Spelling"], ans:1 },
    { q:"'M' in MINTS stands for —", opts:["Materials","Marks","Months","Minutes"], ans:2 },
    { q:"'N' in MINTS stands for —", opts:["Numbers","Notes","Names (people, places, rivers, days)","Nouns only"], ans:2 },
    { q:"'T' in MINTS stands for —", opts:["Time","Titles (Dr., Mr., Mrs.)","Things","Tests"], ans:1 },
    { q:"A noun is a word that refers to —", opts:["An action","A person, place, thing or idea","A description","A connection"], ans:1 },
    { q:"A verb is a word that shows —", opts:["A name","A description","An action","A connection"], ans:2 },
    { q:"An adjective is a word that —", opts:["Shows action","Describes other words","Connects sentences","Names a place"], ans:1 },
    { q:"An adverb answers the questions —", opts:["Who? What?","How? How often? When? Where?","Why? Which?","Whom? Whose?"], ans:1 },
    { q:"'And', 'or', 'but' are examples of —", opts:["Prepositions","Conjunctions","Interjections","Articles"], ans:1 },
    { q:"Prepositions usually answer the questions —", opts:["What and why","Where, when, and how","Who and whom","Which and whose"], ans:1 },
    { q:"Words like 'Wow!', 'Oh!', 'Help!' are called —", opts:["Conjunctions","Prepositions","Interjections","Articles"], ans:2 },
    { q:"In the sentence 'Nisha sells a laptop', the subject is —", opts:["sells","a laptop","Nisha","the store"], ans:2 },
    { q:"A direct object answers the question —", opts:["Who?","Where?","What?","When?"], ans:2 },
    { q:"An indirect object answers the question —", opts:["What?","To whom / for whom?","Where?","How?"], ans:1 },
    { q:"In active voice, the subject —", opts:["Receives the action","Does the action","Is missing","Is passive"], ans:1 },
    { q:"In passive voice, the subject —", opts:["Does the action","Receives the action","Is removed","Gives command"], ans:1 },
    { q:"'Where is my I-card?' is a/an — sentence.", opts:["Declarative","Imperative","Exclamatory","Interrogative"], ans:3 },
    { q:"'Go to office today.' is a/an — sentence.", opts:["Declarative","Interrogative","Exclamatory","Imperative"], ans:3 },
    { q:"'It is very cold.' is a/an — sentence.", opts:["Interrogative","Imperative","Declarative","Exclamatory"], ans:2 },
    { q:"An exclamation mark (!) is used at the end of a sentence to indicate —", opts:["A question","A fact","A strong feeling like surprise or anger","A command"], ans:2 },
    { q:"An apostrophe followed by 's' shows —", opts:["Plural","Possession (something belongs to someone)","Question","Exclamation"], ans:1 },
    { q:"A paragraph is a group of sentences that share —", opts:["Different topics","A common idea","No connection","Random words"], ans:1 },
    { q:"A simple sentence has —", opts:["Many subjects","Only one subject and one predicate","No verb","Multiple clauses"], ans:1 },
    { q:"The articles in English are —", opts:["And, or, but","On, at, in","A, an, the","Wow, oh, help"], ans:2 },
    { q:"'An' is used before words with a — sound.", opts:["Consonant","Vowel","Silent","Hard"], ans:1 },
];

// ══════ Short Answer Questions (2M, 3M, 4M mixed) ══════
const shortQuestions = [
    // Assessment of Students
    { marks:2, q:"Define assessment in the context of physical education.", a:"Assessment is the process of making a judgment about student learning. The word comes from Latin 'assidere' meaning 'to sit beside the learner.' It answers two key questions: (1) What was learnt? (2) How well was it learnt? It is an effective tool to enhance learning." },
    { marks:2, q:"What is teacher observation in PE assessment?", a:"Teacher observation is the most common form of assessment in physical education. It is used to assess psychomotor performance and the affective domain. The teacher stands outside the activity area using techniques like 'back of the wall' and scanning to observe the full class." },
    { marks:2, q:"What is peer observation?", a:"Peer observation means students observing other students to assess competence in skill performance. Students work as partners and provide feedback on specific cues. Important rule: children should observe only one cue at a time, and the teacher must define cues clearly." },
    { marks:2, q:"What is a checklist? Why is it important?", a:"A checklist is a tool used to organise assessment and verify important tasks. It helps collect data in an orderly and systematic manner, ensures the teacher doesn't forget any important point, and reduces errors while ensuring consistency and completeness." },
    { marks:2, q:"Differentiate between formative and summative evaluation.", a:"Formative evaluation is an ongoing process that monitors student learning progress during instruction and provides continuous feedback. Summative evaluation evaluates the outcome at the end of a course to determine the extent to which students have mastered the intended learning outcomes." },
    { marks:2, q:"What is diagnostic evaluation?", a:"Diagnostic evaluation means finding out the exact problem. Through it, the teacher can identify the student's strengths and weaknesses and discover the causes of learning problems. These can then be fixed with remedial actions." },
    { marks:3, q:"Explain the three factors that influence assessment.", a:"1. Physical Factors — Age, developmental level, physical disabilities, and general health (whether the student has eaten, slept well, is on medication, or is ill).\n2. School Factors — Whether the student feels safe/connected at school, has chronic absenteeism, is over/under-age for the grade, or was pulled from an enjoyable activity.\n3. Teacher Factors — Every teacher has a different teaching style. The physical and mental state of the teacher, their knowledge of test materials, and familiarity with the testing environment all impact the assessment." },
    { marks:3, q:"Explain the difference between qualitative and quantitative assessment.", a:"Qualitative Assessment: Looks for changes in the quality/form of a skill as it is performed (not the outcome). Based on teacher's experience, judgment, and rubrics. Uses performance indicators and criteria.\n\nQuantitative Assessment: Based on measurable scores (e.g., fitness test results). A student's score is compared to a table of norms and given a rating. Examples include 600m run time, standing broad jump distance, sit-ups count." },
    { marks:3, q:"What is a rubric? Explain the 3-point and 5-point grading scales.", a:"A rubric is a coherent set of criteria for students' skills that includes descriptions of performance quality levels. The word comes from Latin for 'red.'\n\n3-point scale: A = Proficient (3 pts), B = Developing (2 pts), C = Needs Development (1 pt).\n\n5-point scale: A = Excellent (5 pts), B = Very Good (4 pts), C = Good (3 pts), D = Average (2 pts), E = Needs Improvement (1 pt)." },
    { marks:3, q:"What is the importance of creating benchmarks? How are they created?", a:"Benchmarks help justify whether a student's fitness level is adequate for their age group. Without benchmarks, we can't compare performance across different schools/regions.\n\nSteps to create: (1) Collect data from different schools and states (2) Use same age group (3) Separate norms for boys and girls (4) More data points = more accuracy (5) Analyze data and create norms in grading format (6) Test through pilot testing for authentication (7) Finalize norms." },
    { marks:3, q:"List any six fitness parameters and their corresponding tests.", a:"1. Aerobic Capacity — 600m Run/Walk, Beep Test\n2. Anaerobic Capacity — 20m Sprint, 30m Sprint\n3. Upper Body Strength — Medicine Ball Throw, Push-ups, Pull-ups\n4. Lower Body Strength — Standing Broad Jump, Vertical Jump\n5. Abdominal Strength — Curl-ups, Sit-ups, Plank test\n6. Flexibility — Sit & Reach test, V-Sit test, Toe Touch" },
    { marks:4, q:"Describe the pre-assessment, during assessment, and post-assessment steps in detail.", a:"Pre-Assessment:\n• Students should know and practice assessments beforehand\n• Schedule discussed with school coordinator\n• Parent consent obtained; students with medical issues identified\n• Report template approved by principal\n• Weather checked (outdoor assessments)\n• Student data collected and cross-checked\n• Ground marking completed\n• Props/equipment checked; water and first aid arranged\n\nDuring Assessment:\n• Assessment area checked for safety (stones, nails, glass cleared)\n• All stations marked; rules explained with clear instructions\n• Student attendance taken\n• Warm-up given before testing\n• Students encouraged to drink water\n• Scores rechecked; retest if errors found\n• Students do cool-down before leaving\n\nPost Assessment:\n• Coordinator informed about conclusion\n• Data uploaded on excel sheets carefully\n• Report generation date confirmed\n• Reports checked for errors (name, gender)\n• Reports distributed; PTM conducted" },
    { marks:4, q:"Explain the purpose and process of Parent-Teacher Meeting (PTM) in physical education assessment.", a:"Purpose: PTM is an opportunity to interact with parents and explain the assessment report. It is a two-way conversation where teachers learn from parents and parents learn from teachers.\n\nKey principles:\n• Emphasis on learning — link discussions to strategies for supporting student learning\n• Share both strengths and challenges — parents need praise and constructive criticism\n• Respect parents' insights about their child\n\nPre-PTM: Confirm date/time, ensure error-free reports, prepare props display, keep testimonial forms\nDuring PTM: Arrive early, be presentable, display clean props, be polite, understand questions before answering\nPost PTM: Send completion report and testimonials, report any escalations immediately" },
    { marks:4, q:"Explain the types of assessment used in physical education with examples.", a:"1. Teacher Observation — Most common; teacher watches and evaluates student performance using checklists (e.g., observing running form: arm/leg opposition, toes forward, heel-to-toe landing)\n\n2. Homework — Work completed outside PE class; includes fitness practice, activity logs, reports on sporting events\n\n3. Peer Observation — Students observe each other and provide feedback on specific cues (e.g., partner watches dribbling for fingerpads, bent knees, staggered stance)\n\n4. Self-Assessment — Students evaluate their own psychomotor, cognitive and affective aspects (e.g., basketball dribbling self-check: preferred hand, non-preferred, while walking, against defense)" },

    // Communication Skills
    { marks:2, q:"Define communication and name its key elements.", a:"Communication is a two-way process of exchanging information or messages between individuals using language, symbols, signs or behaviour. Key elements: Sender (encodes and sends message), Message (information conveyed), Channel (medium — email, speech), Receiver (decodes message), and Feedback (receiver's response confirming understanding)." },
    { marks:2, q:"What are the four key communication skills?", a:"The four key communication skills are LSRW — Listening, Speaking, Reading, and Writing. To learn a language effectively, one needs to develop all four skills. Speaking more than one language helps communicate with people around the world." },
    { marks:2, q:"Explain the difference between clear, concise, and accurate messages.", a:"Clear: Conveys the exact message (e.g., specifying '11 AM on Tuesday' instead of just 'late').\nConcise: Brief and to the point, without unnecessary information.\nAccurate: Factual and verifiable (e.g., saying '50 per cent completed' instead of 'most completed')." },
    { marks:2, q:"What is active listening?", a:"Active listening is an art that involves both a desire to comprehend and to offer support and empathy to the speaker. It happens when you hear, understand, respond and remember what is being said. It affects job effectiveness, relationship quality, and overall well-being." },
    { marks:2, q:"Name the five stages of active listening.", a:"The five stages are:\n1. Receiving — listening attentively\n2. Understanding — informed agreement about something\n3. Remembering — retrieval or recall of information\n4. Evaluating — judging the value and importance\n5. Responding — saying or doing something in response" },
    { marks:2, q:"What are the four types of sentences with examples?", a:"1. Declarative — States a fact, ends with full stop. (It is very cold.)\n2. Interrogative — Asks a question, ends with question mark. (Did you go to office?)\n3. Exclamatory — Expresses strong emotion, ends with exclamation mark. (I received the prize!)\n4. Imperative — Gives command/request. (Go to office today.)" },
    { marks:2, q:"What is MINTS? Explain each letter.", a:"MINTS is a set of capitalization rules:\nM — Months (June, March are capitalized)\nI — The letter 'I' when used as a word\nN — Names of people, places, rivers, mountains, days\nT — Titles before names (Dr., Mr., Mrs.)\nS — Starting letter of every sentence" },
    { marks:3, q:"Explain the RESPECT acronym for active listening.", a:"R — Remove distractions (reduce TV/phone volume while talking)\nE — Eye contact (look at the speaker while listening)\nS — Show you are listening (use gestures attentively)\nP — Pay attention (focus on what speaker is saying)\nE — Empathise (feel the emotions of the speaker; imagine their situation)\nC — Clarify doubts (ask questions to clarify)\nT — Tune to the timing of the speaker (wait for them to finish, then respond)" },
    { marks:3, q:"Explain the barriers to active listening and how to overcome them.", a:"Barriers:\n1. Being pre-occupied — not listening carefully due to personal thoughts → Overcome: Don't let emotions take over; keep away phones\n2. Noise and visual distractions — can't hear clearly → Overcome: Create a conducive environment\n3. Past experiences/mindset — biases and prejudices → Overcome: Be objective in approach\n4. Personal factors — preconceptions about the other person → Overcome: Let the other person finish speaking, then respond" },
    { marks:3, q:"List the five basic parts of speech with definitions and examples.", a:"1. Noun — Naming word (person, place, thing, idea). Example: Dog, India, Sanjay\n2. Pronoun — Used in place of a noun. Example: I, They, He, She\n3. Adjective — Describes other words. Example: Small, Blue, Sharp, Loud\n4. Verb — Shows action. Example: Run, Eat, Think, Sit\n5. Adverb — Adds meaning to verb/adjective/adverb; answers how, how often, when, where. Example: Easily, Always, Before" },
    { marks:3, q:"What are supporting parts of speech? Explain with examples.", a:"Supporting parts of speech connect and add information to sentences:\n1. Articles — 'a', 'an', 'the'. ('An' before vowel sounds, 'a' before consonants, 'the' for specific nouns)\n2. Conjunctions — Join words/sentences. Common: and, or, but. (Sheela and I went to the market.)\n3. Prepositions — Show relationship between words; answer where, when, how. Common: on, at, under, in. (The cat is on the roof.)\n4. Interjections — Express strong emotions with exclamation mark. (Wow! Oh! Help!)" },
    { marks:4, q:"Differentiate between active and passive voice with examples. Also explain direct and indirect objects.", a:"Active Voice: Subject DOES the action.\n• Sanjay broke the glass.\n• She wrote an email.\n• The tiger was chasing the deer.\n\nPassive Voice: Subject RECEIVES the action.\n• The glass was broken by Sanjay.\n• An email was written by her.\n• The deer was being chased by the tiger.\n\nDirect Object: Answers 'what?' — directly acted upon by verb.\n• 'Nisha sells a laptop' → laptop is direct object\n\nIndirect Object: Answers 'to whom?' or 'for whom?'\n• 'Abdul gave a gift to his mother' → gift is direct object, his mother is indirect object" },
    { marks:4, q:"Explain the factors affecting active listening and the stages of active listening in detail.", a:"Factors affecting active listening:\n1. Eye contact — Most important aspect; signals 'I am listening to you'. Avoiding it signals disinterest.\n2. Gestures — Indicate to the speaker whether you are listening. Keep hands and feet still.\n3. Avoiding distractions — Remove what distracts you. Switch off phone in meetings. Don't glance at wristwatch.\n4. Giving feedback — Can be positive or negative, but must be polite to avoid hurting or offending.\n\nFive stages:\n1. Receiving — Listening attentively to the speaker\n2. Understanding — Forming an informed agreement or comprehension\n3. Remembering — Retrieving or recalling information from what was said\n4. Evaluating — Judging the value, quantity, importance of what was heard\n5. Responding — Saying or doing something as a response to what was communicated\n\nThe best kind of listening is 'active listening' — when you hear, understand, respond AND remember what is being said." },
];

// ══════ Quiz Engine ══════
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
                if (idx === d.ans) { btn.classList.add('correct'); score++; }
                else { btn.classList.add('wrong'); opts[d.ans].classList.add('correct'); }
                container.querySelector('.q-score').textContent = score + ' correct';
                nextBtn.disabled = false;
            });
        });
        nextBtn.addEventListener('click', () => {
            if (current < data.length - 1) { current++; render(); }
            else { showResult(); }
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
            current = 0; score = 0; render();
        });
    }
    render();
}

// ══════ Short Answer Renderer ══════
function renderShortQuestions(containerId, data) {
    const container = document.getElementById(containerId);
    container.innerHTML = data.map(item => `
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

// ══════ Init ══════
document.addEventListener('DOMContentLoaded', () => {
    createQuiz('mcq-container', mcqData);
    renderShortQuestions('questions-container', shortQuestions);
});
