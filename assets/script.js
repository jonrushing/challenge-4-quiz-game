const mainMenu = document.getElementById("mainMenu")
const startButton = document.getElementById("startBtn")
const rules = document.getElementById("rulesCard")
const quizBox = document.getElementById("quizCard")


startButton.addEventListener("click", showrules)

function showrules(){
    if (mainMenu.style.display !== "none") {
    mainMenu.style.display = "none";
    }
    if (rules.style.display !== "grid") {
    rules.style.display = "grid";
        }
}

const playGame = document.getElementById("startGame")