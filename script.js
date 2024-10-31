const questions = [
    {
        question: "Koliko je 9x8?", 
        answers: [
            {text:"72", correct:true},
            {text:"68", correct:false},
            {text:"82", correct:false},
            {text:"92", correct:false},
        ]
    },{
        question: "Koliko je 7x7?", 
        answers: [
            {text:"22", correct:false},
            {text:"68", correct:false},
            {text:"63", correct:true},
            {text:"52", correct:false},
        ]
    },
    {
        question: "Koliko je 9x4?", 
        answers: [
            {text:"28", correct:false},
            {text:"36", correct:true},
            {text:"38", correct:false},
            {text:"33", correct:false},
        ]
    }
];

const questionElement = document.getElementById("question");
const odgovori = document.getElementById("odgovor"); 
const sledeceBtn = document.getElementById("sledece-btn");

let currentQuestionIndex = 0;
let score = 0;

function startquiz() {
    currentQuestionIndex = 0;
    score = 0;
    sledeceBtn.innerHTML = "Sledeće";
    sledeceBtn.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetStat();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        odgovori.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(odgovori.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    sledeceBtn.style.display = "block";
}

sledeceBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        handleNextButton();
    } else {
        showScore();
    }
});

function resetStat() {
    sledeceBtn.style.display = "none";
    while (odgovori.firstChild) {
        odgovori.removeChild(odgovori.firstChild);
    }
}

function handleNextButton() {
    currentQuestionIndex++;
    showQuestion();
}

function showScore() {
    resetStat();
    questionElement.innerHTML = `Tvoj rezultat je ${score} od mogućih ${questions.length}!`;
    sledeceBtn.innerHTML = "Ponovi";
    sledeceBtn.style.display = "block";
    sledeceBtn.onclick = startquiz;  
}

startquiz();
