const mainMenu = document.getElementById("mainMenu")
const startButton = document.getElementById("startBtn")
const rules = document.getElementById("rulesCard")
const quizBox = document.getElementById("quizCard")
const questionEl= document.getElementById("question")
const answerButtonEl = document.getElementById("answerButtons")
const gameover = document.getElementById("gameOver")

startButton.addEventListener("click", showrules)

//displays the rules of the game
function showrules(){
    if (mainMenu.style.display !== "none") {
        mainMenu.style.display = "none";
            }
    if (rules.style.display !== "grid") {
    rules.style.display = "grid";
        }
}

const playGame = document.getElementById("startGame")

playGame.addEventListener("click", startGame)

var timer = document.getElementById("timer")
var timerStart = 31


    console.log(timerStart)

var randomquestion, currentQuestionIndex

//Main game function 
function startGame() {
    if (rules.style.display !== "none") {
        rules.style.display = "none";
            }
    if (quizBox.style.display !== "grid") {
        quizBox.style.display = "grid";
            }
    startTimer()
    randomquestion = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    populatequestion()
}
//Timer function
function startTimer(){
   const countdown = setInterval(()=>{
        timerStart--;
        timer.innerHTML = timerStart
        if(timerStart <= 0){
            clearInterval(countdown),
            quizBox.style.display = "none",
            gameover.style.display = "flex"
        }
     },1000)
}
//funtion used to populate the question form
function populatequestion(){
    clearForm()
    showQuestion(randomquestion[currentQuestionIndex])
}

// makes buttons and places answers from q/a object into made buttons  
function showQuestion(question){
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("answer-button")
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", submitAnswer)
        answerButtonEl.appendChild(button)
    })
}

function clearForm(){
    while (answerButtonEl.firstChild){
        answerButtonEl.removeChild
        (answerButtonEl.firstChild)
    }
}

function submitAnswer(event){
    const clickedButton = event.target
    const correct = clickedButton.dataset.correct
    Array.from(answerButtonEl.children).forEach(button => {
        selectionResult(button, button.dataset.correct)
    })
    console.log(correct)
}
function selectionResult(correct){
    if (correct) { 
        rightAnswer()
} else {
        wrongAnswer()
}

function rightAnswer(){
    questionEl.innerHTML = "Correct!"

function wrongAnswer(){
    questionEl.innerHTML = "Wrong!"
}

}
}
//Questions used for the game
const questions = [
    {question: "What sound does a cow make?",
        answers:[
        {text: "moo", correct: true},
        {text: "meow", correct: false},
        {text: "woof", correct: false},
        {text: "oink", correct: false}
        ]
    },
    {question: "What sound does the dog make?",
        answers:[
        {text: "chirp", correct: false},
        {text: "I'm walk'n here!", correct: false},
        {text: "bark", correct: true},
        {text: "cluck", correct: false}
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