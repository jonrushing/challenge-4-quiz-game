const mainMenu = document.getElementById("mainMenu")
const startButton = document.getElementById("startBtn")
const rules = document.getElementById("rulesCard")
const quizBox = document.getElementById("quizCard")
const questionEl= document.getElementById("question")
const answerButtonEl = document.getElementById("answerButtons")

startButton.addEventListener("click", showrules)

function showrules(){
    mainMenu.classList.add("hide")
    if (rules.style.display !== "grid") {
    rules.style.display = "grid";
        }
}

const playGame = document.getElementById("startGame")

playGame.addEventListener("click", startGame)

var randomquestion, currentQuestionIndex


function startGame() {
    if (rules.style.display !== "none") {
        rules.style.display = "none";
            }
    if (quizBox.style.display !== "grid") {
        quizBox.style.display = "grid";
            }
    randomquestion = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    populatequestion()
}

function populatequestion(){
    clearForm()
    showQuestion(randomquestion[currentQuestionIndex])
}

function showQuestion(question){
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("answer-button")
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", pullAnswer)
        answerButtonEl.appendChild(button)
    })
}

function clearForm(){
    while (answerButtonEl.firstChild){
        answerButtonEl.removeChild
        (answerButtonEl.firstChild)
    }
}

function pullAnswer(event){

}
const questions = [
    {question: "What sound does a cow make?",
        answers:[
        {text: "moo", correct: true},
        {text: "meow", correct: false},
        {text: "woof", correct: false},
        {text: "oink", correct: false}
        ]
    },
    {question: "What sound does my ass make?",
        answers:[
        {text: "burp", correct: false},
        {text: "ah-choo", correct: false},
        {text: "fart", correct: true},
        {text: "cough", correct: false}
        ]
    },
    {question: "What sound does a cat make?",
        answers:[
        {text: "caw", correct: false},
        {text: "meow", correct: true},
        {text: "nay", correct: false},
        {text: "tweet", correct: false}
        ]
    },
]