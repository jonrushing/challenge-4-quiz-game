const mainMenu = document.getElementById("mainMenu")
const startButton = document.getElementById("startBtn")
const quizBox = document.getElementById("quizCard")

startButton.addEventListener("click", startgame)

function startgame(){
    if (mainMenu.style.display !== "none") {
    mainMenu.style.display = "none";
    }
    if (quizBox.style.display !== "grid") {
    quizBox.style.display = "grid";
        }
    
    console.log(startButton)
}
