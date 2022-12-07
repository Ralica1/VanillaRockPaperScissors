//1.
const GAMEOPTIONS = ["Rock", "Paper", "Scissors"];


let computerHand = () => {
    return Math.floor(Math.random() * GAMEOPTIONS.length);
}

//2.
let userHand = () => {
    const prompt = require('prompt-sync')({sigint: true});

    let hand;

    while (!(hand in [...Array(GAMEOPTIONS.length + 1).keys()])) {
        hand = Number(prompt("Your choice: "));
    }

    return hand;

}

// 3.

let result = (user, computer) => {

    if (user === computer) {
        return "tie";
    } else if ((user === 0 && computer === 2) || user === computer+1) {
        return "user";
    } else {
        return "computer";
    }

}

//4.
let game = () => {

    console.log("Welcome to Paper Rock Scissors!");
    console.log("Can you make it against the might of your computer?");

    let gameIsOn = true;

    let userWins = 0;
    let computerWins = 0;

    while (gameIsOn) {

        console.log();
        console.log("------------------------------------------");
        console.log("Enter [0] for rock, [1] for paper, [2] for scissors, [3] to stop playing.");

        let user = userHand();
        let computer = computerHand();

        if (user === 3) {
            gameIsOn = !gameIsOn;
            console.log("Ok, bye!");
            continue;
        }

        console.log(`You chose ${GAMEOPTIONS[user]}.`);
        console.log(`The computer chose ${GAMEOPTIONS[computer]}.`);

        let outcome = result(user, computer);

        if (outcome === "user") {
            console.log("You won.");
            userWins++;
        } else if (outcome === "computer") {
            console.log("You lost.");
            computerWins++;
        } else if (outcome === "tie") {
            console.log("It's a tie.");
        }

        console.log(`You: ${userWins}. Computer: ${computerWins}.`);
        console.log();


    }

}

game();