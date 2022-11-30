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
    
    if (usersChoice == "rock" && computersChoice == "rock" ||
        usersChoice == "scissor" && computersChoice == "scissor" ||
        usersChoice == "paper" && computersChoice == "paper") {
            console.log(`Tie! Computer Choose ${computersChoice.toUpperCase()} and you choose ${usersChoice.toUpperCase()}`);
            return "Both";
    } else if (usersChoice == "rock" && computersChoice == "scissor" ||
                usersChoice == "paper" && computersChoice == "rock" ||
                usersChoice == "scissor" && computersChoice == "paper") {
                    console.log(`You Won! Computer Choose ${computersChoice.toUpperCase()} and you choose ${usersChoice.toUpperCase()}`);
                    return "User";
                } else {
                    console.log(`You loose! Computer Choose ${computersChoice.toUpperCase()} and you choose ${usersChoice.toUpperCase()}`);
                    return "Computer";
                }

}