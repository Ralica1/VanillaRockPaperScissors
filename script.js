console.log("Enter 'play()' to start the game!")
function computerPlay() {
    random = Math.random() * 100;
    let computersChoice;

    if (random < 33.33 && random >= 0) {
        computersChoice = "Rock";
        return computersChoice;
    } else if (random >= 33.33 && random <= 66.66) {
        computersChoice = "Paper";
        return computersChoice;
    } else if (random >= 66.66 && random <= 100) {
        computersChoice = "Scissor";
        return computersChoice;
    } else {
        console.log("Error, something went wrong!");
        return 1;
    }
}
function playRound(usersChoice, computersChoice) {
    computersChoice = computerPlay().toLowerCase();
    usersChoice = usersChoice.toLowerCase();
    console.log(`Users Choice: ${usersChoice} and Computers Choice: ${computersChoice}`);
    if (usersChoice !== "rock" && usersChoice !== "paper" && usersChoice !== "scissors" ) {
        console.log(`Bad entry!\n Enter "rock", "paper" or "scissors".`)
        return "falseEntry"
    }
    else if (usersChoice == "rock" && computersChoice == "rock" ||
        usersChoice == "scissor" && computersChoice == "scissor" ||
        usersChoice == "paper" && computersChoice == "paper") {
            console.log(`Tie!\n Computer Choose ${computersChoice.toUpperCase()} and you choose ${usersChoice.toUpperCase()}`);
            return "Both";
    } else if (usersChoice == "rock" && computersChoice == "scissor" ||
                usersChoice == "paper" && computersChoice == "rock" ||
                usersChoice == "scissor" && computersChoice == "paper") {
                    console.log(`You Won!\n Computer Choose ${computersChoice.toUpperCase()} and you choose ${usersChoice.toUpperCase()}`);
                    return "User";
                } else {
                    console.log(`You lose!\n Computer Choose ${computersChoice.toUpperCase()} and you choose ${usersChoice.toUpperCase()}`);
                    return "Computer";
                }

}
function play() {
    let userPoints = 0;
    let computerPoints = 0;
    for(let i = 0; i < 5; i++){
        usersChoice = prompt("Choose Rock, Paper or Scissor!").toLowerCase();
        let winner = playRound(usersChoice);
        if (winner == "falseEntry") {
            i--;
            userPoints--;
            computerPoints--;
        } else if (winner == "User") {
            userPoints++;
        } else if (winner == "Computer") {
            computerPoints++;
        } else {
            userPoints++;
            computerPoints++;
        }
    }

    if (userPoints > computerPoints) {
        console.log(`You Won!\n with User: ${userPoints} and Computer: ${computerPoints}`)
    } else if (userPoints == computerPoints) {
        console.log(`Tie!\n You have the same amount of Points\n User: ${userPoints} and Computer: ${computerPoints}`)
    }
    else {
        console.log(`You lost!\n with User: ${userPoints} and Computer: ${computerPoints}`)
    }
}