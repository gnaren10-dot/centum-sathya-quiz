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