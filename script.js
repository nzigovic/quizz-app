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
            {text:"", correct:false},
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
    sledeceBtn.innerHTML = "Sledece";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    odgovori.innerHTML = ""; 
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        odgovori.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        
        button.addEventListener("click", selectAnswer)
        });
}


function selectAnswer (e){
    const selectedBtn = e.target ;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add ("correct");

    }else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.childre).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");

        }
        button.disabled = "true"
    })
}

startquiz();
