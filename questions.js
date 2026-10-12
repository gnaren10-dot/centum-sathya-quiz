// CENTUM SATHYA TUITION CENTRE - Official Question Bank Core Vault
// Curated Chapter-Wise Matrix (Science & Maths)
const quizDatabase = {
    mcq: {
        science: [
            // === PHYSICS: LIGHT REFLECTION & REFRACTION ===
            { id: 1, chapter: "Light Reflection & Refraction", question: "The focal length of a spherical mirror is 20 cm. Its radius of curvature is:", options: ["10 cm", "20 cm", "30 cm", "40 cm"], answer: "40 cm" },
            { id: 2, chapter: "Light Reflection & Refraction", question: "The refractive index of diamond is:", options: ["1.33", "1.50", "2.42", "1.77"], answer: "2.42" },
            
            // === PHYSICS: ELECTRICITY ===
            { id: 3, chapter: "Electricity", question: "What is the SI unit of electric potential difference?", options: ["Ampere", "Volt", "Ohm", "Joule"], answer: "Volt" },
            { id: 4, chapter: "Electricity", question: "If three resistors of 2Ω, 3Ω, and 6Ω are connected in parallel, their equivalent resistance is:", options: ["1Ω", "6Ω", "11Ω", "0.5Ω"], answer: "1Ω" },

            // === CHEMISTRY: PERIODIC CLASSIFICATION & REACTIONS ===
            { id: 5, chapter: "Periodic Classification", question: "Newlands' law of octaves was found to be applicable only up to which element?", options: ["Oxygen", "Calcium", "Cobalt", "Potassium"], answer: "Calcium" },
            { id: 6, chapter: "Chemical Reactions", question: "The reaction between hydrogen gas and oxygen gas to form water is an example of:", options: ["Combination Reaction", "Decomposition Reaction", "Displacement Reaction", "Double Displacement"], answer: "Combination Reaction" },
            { id: 7, chapter: "Acids, Bases & Salts", question: "Which acid is present in tomato?", options: ["Citric acid", "Oxalic acid", "Lactic acid", "Tartaric acid"], answer: "Oxalic acid" },

            // === BIOLOGY: LIFE PROCESSES & CONTROL ===
            { id: 8, chapter: "Life Processes", question: "Xylem in plants is primary responsible for the transport of:", options: ["Water", "Food", "Amino acids", "Oxygen"], answer: "Water" },
            { id: 9, chapter: "Control & Coordination", question: "Which plant hormone is responsible for the wilting of leaves?", options: ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid"], answer: "Abscisic acid" }
        ],
        maths: [
            // === MATHS: TRIGONOMETRIC IDENTITIES ===
            { id: 1, chapter: "Trigonometric Identities", question: "Evaluate: sin²(30°) + cos²(30°)", options: ["0", "1/2", "1", "2"], answer: "1" },
            { id: 2, chapter: "Trigonometric Identities", question: "If sin θ = 4/5, then the value of cos θ is:", options: ["3/5", "5/4", "4/3", "3/4"], answer: "3/5" },
            
            // === MATHS: ALGEBRA & QUADRATIC EQUATIONS ===
            { id: 3, chapter: "Quadratic Equations", question: "The roots of the equation x² - 9 = 0 are:", options: ["3, 3", "3, -3", "-3, -3", "9, -9"], answer: "3, -3" },
            { id: 4, chapter: "Arithmetic Progressions", question: "What is the common difference of an AP whose nth term is an = 3n + 7?", options: ["3", "7", "10", "1"], answer: "3" },

            // === MATHS: MATRICES & COORDINATE GEOMETRY ===
            { id: 5, chapter: "Matrices", question: "If a matrix has 8 elements, what are the possible orders it can have?", options: ["2", "3", "4", "6"], answer: "4" },
            { id: 6, chapter: "Coordinate Geometry", question: "The distance of the point P(3, 4) from the origin (0, 0) is:", options: ["3 units", "4 units", "5 units", "7 units"], answer: "5" }
        ]
    },
    written: {
        science: [
            // === 2 MARK QUESTIONS ===
            { id: 1, marks: 2, chapter: "Light Reflection", question: "Define power of a lens. What is its SI unit?" },
            { id: 2, marks: 2, chapter: "Acids, Bases & Salts", question: "Why does distilled water not conduct electricity, whereas rain water does?" },
            { id: 3, marks: 2, chapter: "Heredity", question: "What are homologous organs? Give one example." },
            
            // === 3 MARK QUESTIONS ===
            { id: 4, marks: 3, chapter: "Periodic Classification", question: "State Mendeleev's Periodic Law. Write down any two limitations of Mendeleev's Periodic Table." },
            { id: 5, marks: 3, chapter: "Electricity", question: "Derive the expression for the heat produced in a resistor R when a current I flows through it for time t (Joule's Law of Heating)." },
            
            // === 5 MARK QUESTIONS ===
            { id: 6, marks: 5, chapter: "Life Processes", question: "Draw a clean diagram of the human excretory system, label its four major parts, and explain the mechanism of urine formation in the nephron." },
            { id: 7, marks: 5, chapter: "Carbon & Its Compounds", question: "What is homologous series? State any four characteristics of a homologous series with clear examples." }
        ],
        maths: [
            // === 2 MARK QUESTIONS ===
            { id: 1, marks: 2, chapter: "Trigonometry", question: "If tan A = cot B, prove that A + B = 90°." },
            { id: 2, marks: 2, chapter: "Coordinate Geometry", question: "Find the area of a triangle whose vertices are (1, -1), (-4, 6), and (-3, -5)." },
            
            // === 3 MARK QUESTIONS ===
            { id: 3, marks: 3, chapter: "Triangles & Geometry", question: "In a right triangle ABC right-angled at B, if tan A = 1, then verify that 2 sin A cos A = 1." },
            { id: 4, marks: 3, chapter: "Calculus / Functions", question: "Find the points of local maxima or minima for the function f(x) = x³ - 3x." },
            
            // === 5 MARK QUESTIONS ===
            { id: 5, marks: 5, chapter: "Geometry / Theorems", question: "State and prove Pythagoras Theorem dynamically using structural geometric proofs." },
            { id: 6, marks: 5, chapter: "Surface Areas & Volumes", question: "A tent is in the shape of a cylinder surmounted by a conical top. If the height and diameter of the cylindrical part are 2.1 m and 4 m respectively, and the slant height of the top is 2.8 m, find the area of the canvas used for making the tent." }
        ]
    }
};
// CENTUM SATHYA TUITION CENTRE - Question Bank Database
const quizDatabase = {
    // MATHS COLUMN SECTIONS
    maths_type1: [
        {
            question: "Check whether the following sequence forms an AP: 0.2, 0.22, 0.222, 0.2222, ...",
            options: ["It is an AP", "It is not an AP", "It is a geometric progression", "Cannot be determined"],
            answer: 1
        },
        {
            question: "Find the common difference 'd' for the AP sequence: -1.2, -3.2, -5.2, -7.2, ...",
            options: ["d = 2", "d = -2", "d = -1.2", "d = 3.2"],
            answer: 1
        },
        {
            question: "Is the sequence a, 2a, 3a, 4a, ... an Arithmetic Progression?",
            options: ["Yes, with common difference a", "No, it is not an AP", "Yes, with common difference 2a", "Only if a = 0"],
            answer: 0
        },
        {
            question: "Find the common difference 'd' of the AP: 1/n, (1+n)/n, (1+2n)/n, ...",
            options: ["d = n", "d = 1/n", "d = 1", "d = 1+n"],
            answer: 2
        },
        {
            question: "For the AP: -10, -6, -2, 2, ... find the common difference d and the next two terms a₅, a₆.",
            options: ["d = -4; a₅ = -2, a₆ = -6", "d = 4; a₅ = 6, a₆ = 10", "d = 4; a₅ = 4, a₆ = 8", "d = 2; a₅ = 4, a₆ = 6"],
            answer: 1
        }
    ],
    maths_type2: [
        {
            question: "Find the 20th term of the AP: 5, 11, 17, 23, ...",
            options: ["115", "119", "120", "125"],
            answer: 1
        },
        {
            question: "Find the nth term (an) of the AP: 10, 7, 4, ...",
            options: ["an = 13 - 3n", "an = 10 + 3n", "an = 7 - 3n", "an = 13 + 3n"],
            answer: 0
        }
    ],
    maths_trig: [
        {
            question: "Evaluate the primary trigonometric identity value: sin²(θ) + cos²(θ)",
            options: ["0", "1", "-1", "Undefined"],
            answer: 1
        }
    ],
    
    // SCIENCE COLUMN SECTIONS 
    science_light: [
        {
            question: "Where should an object be placed in front of a concave mirror to obtain a real image of the same size?",
            options: ["At Focus (F)", "At Centre of Curvature (C)", "Between C and F", "Beyond C"],
            answer: 1
        }
    ]
};
// Runtime Application State
let activeQuestions = [];
let currentIdx = 0;
let studentAnswers = [];
let examTimer = null;
let secondsRemaining = 0;

function startExamSimulator(sectionKey) {
    // 1. Fetch data from questions.js structural object arrays
    activeQuestions = quizDatabase[sectionKey] || [];
    
    if (activeQuestions.length === 0) {
        alert("This question array section is currently empty!");
        return;
    }

    // 2. Initialize application state variables
    currentIdx = 0;
    studentAnswers = new Array(activeQuestions.length).fill(null);
    
    // 3. Set standard timer constraint: 60 seconds per question
    secondsRemaining = activeQuestions.length * 60; 
    
    // 4. Update UI screen layout visibility switching
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('quiz-window').style.display = 'block';
    document.getElementById('result-area').innerHTML = '';
    
    // 5. Fire up the execution cycles
    runCountdownEngine();
    renderActiveQuestion();
}

function runCountdownEngine() {
    clearInterval(examTimer);
    refreshTimerDisplay();
    
    examTimer = setInterval(() => {
        secondsRemaining--;
        refreshTimerDisplay();
        
        if (secondsRemaining <= 0) {
            clearInterval(examTimer);
            alert("⏰ Time has expired! Your exam will be submitted automatically.");
            compileExamScore();
        }
    }, 1000);
}

function refreshTimerDisplay() {
    const mins = Math.floor(secondsRemaining / 60);
    const secs = secondsRemaining % 60;
    const formattedTime = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    document.getElementById('timer-display').innerText = `⏱️ Time Remaining: ${formattedTime}`;
}

function renderActiveQuestion() {
    const data = activeQuestions[currentIdx];
    document.getElementById('question-text').innerText = `Q${currentIdx + 1}. ${data.question}`;
    
    const targetUL = document.getElementById('options-list');
    targetUL.innerHTML = '';
    
    data.options.forEach((opt, index) => {
        const li = document.createElement('li');
        const checkedState = studentAnswers[currentIdx] === index ? 'checked' : '';
        
        li.innerHTML = `
            <label>
                <input type="radio" name="sim-opt" value="${index}" ${checkedState}>
                ${opt}
            </label>
        `;
        targetUL.appendChild(li);
    });

    // Control structural display boundaries for system buttons
    document.getElementById('prev-btn').style.visibility = currentIdx === 0 ? 'hidden' : 'visible';
    document.getElementById('next-btn').innerText = currentIdx === activeQuestions.length - 1 ? 'Submit Exam' : 'Next Question';
}

function recordSelectedOption() {
    const chosenRadio = document.querySelector('input[name="sim-opt"]:checked');
    if (chosenRadio) {
        studentAnswers[currentIdx] = parseInt(chosenRadio.value);
    }
}

function goToPrevQuestion() {
    recordSelectedOption();
    if (currentIdx > 0) {
        currentIdx--;
        renderActiveQuestion();
    }
}

function goToNextQuestion() {
    recordSelectedOption();
    if (currentIdx < activeQuestions.length - 1) {
        currentIdx++;
        renderActiveQuestion();
    } else {
        compileExamScore();
    }
}

function compileExamScore() {
    clearInterval(examTimer);
    let correctCount = 0;
    
    activeQuestions.forEach((item, index) => {
        if (studentAnswers[index] === item.answer) {
            correctCount++;
        }
    });
    
    // Clear viewport objects out and show metrics report screen
    document.getElementById('options-list').innerHTML = '';
    document.getElementById('question-text').innerText = 'Exam Attempt Completed Successfully!';
    document.getElementById('prev-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('timer-display').style.display = 'none';
    
    document.getElementById('result-area').innerHTML = `
        <div style="font-size: 1.8rem; margin-bottom:10px;">Final Score: ${correctCount} / ${activeQuestions.length}</div>
        <div style="font-size: 1.1rem; color:#5f6368; margin-bottom:20px;">Percentage: ${Math.round((correctCount/activeQuestions.length)*100)}%</div>
        <button class="nav-btn" onclick="reloadDashboardPortal()">Back to Dashboard</button>
    `;
}

function reloadDashboardPortal() {
    // Reset structural display views back to dashboard state layout
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('quiz-window').style.display = 'none';
    document.getElementById('prev-btn').style.display = 'inline-block';
    document.getElementById('next-btn').style.display = 'inline-block';
    document.getElementById('timer-display').style.display = 'inline-block';
}
function loginAsAdmin() {
    // 1. Ask for the Admin Username
    const username = prompt("Enter Admin Username (e.g., AK or Satya):");
    
    if (!username) return; // Exit if they click cancel

    // 2. Ask for the Password
    const password = prompt(`Enter Password for ${username}:`);

    // 3. Verify the Credentials
    // WARNING: Tech-savvy students can see these passwords if they look at your GitHub files.
    if (username.toUpperCase() === "AK" && password === "AK@Centum2026") {
        alert("Welcome AK! Access Granted.");
        window.location.href = "admin.html"; // Redirects to your admin page
    } 
    else if (username.toLowerCase() === "satya" && password === "Satya@Centum2026") {
        alert("Welcome Satya! Access Granted.");
        window.location.href = "admin.html"; // Redirects to your admin page
    } 
    else {
        alert("Invalid Username or Password!");
    }
}

    }
}
