const choices = document.querySelectorAll("#choice");
const message = document.querySelector("#msg");
const score_card = document.querySelector("#user-score")
const comptscore_card = document.querySelector("#comp-score")

let score = 0;
let comptScore = 0;


const comptChoice = () => {
    const options = ["stone", "paper", "scissors"];
    const rand = Math.floor(Math.random() * 3);
    return options[rand];
}

function drawGame() {
    message.textContent = "Game was Draw. Play again.";
    message.classList.add("bg-[#081b31]");

}


function lose(comptChoice,userChoice) {
    comptscore_card.textContent = comptScore;
    message.textContent = `You lost. ${comptChoice}  beats your ${userChoice}`;
    message.classList.remove("bg-green-500");
    message.classList.add("bg-red-500");
}

function WinMsg(userChoice, comptChoice) {
    score_card.textContent = score;
    message.textContent = `You win! ${userChoice} beats ${comptChoice}`;
    message.classList.remove("bg-red-500");
    message.classList.add("bg-green-500")
}

function playGame(userChoice) {
    
    const competitor = comptChoice();
    let userWin = true;
    if (competitor == userChoice) {
        drawGame();
        return;
    } else {
        
        if (userChoice === "stone") {
            userWin = competitor === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = competitor === "scissors" ? false : true;

        } else if (userChoice == "scissors") {
            userWin = competitor === "stone" ? false : true;
        }
    }
    showWinner(userWin, competitor, userChoice)

}


function showWinner(userWin, competitor, userChoice) {
    
    if (userWin) {
        score++;
        WinMsg(userChoice, competitor)
    } else {
        comptScore++;
        lose(competitor, userChoice)
    }

}





choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        
        const userChoice = choice.dataset.choice;
        playGame(userChoice)

    })

})