const buttons = document.querySelectorAll("button");
const buttonSelection = document.querySelector("#result");

let humanScore = 0;
let computerScore = 0;

let humanChoice;

buttons.forEach((element) => {
	element.addEventListener("click", (event) => {
		humanChoice = element.textContent.toLowerCase();
	});
});

function getComputerChoice(a) {
	let randomNum = Math.floor(Math.random() * 3);

	switch (randomNum) {
		case 0:
			return "rock";
			break;
		case 1:
			return "paper";
			break;
		case 2:
			return "scissors";
			break;
	}
}
function playRound(humanChoice, computerChoice) {
	// Draw
	if (humanChoice == computerChoice) {
		buttonSelection.textContent = "It's a Draw!";
	}
	// Win
	if (
		(humanChoice == "rock" && computerChoice == "scissors") ||
		(humanChoice == "paper" && computerChoice == "rock") ||
		(humanChoice == "scissors" && computerChoice == "paper")
	) {
		buttonSelection.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
	}
	// Lose
	if (
		(humanChoice == "rock" && computerChoice == "paper") ||
		(humanChoice == "paper" && computerChoice == "scissors") ||
		(humanChoice == "scissors" && computerChoice == "rock")
	) {
		buttonSelection.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
	}
}

// function playGame() {
// 	let round = 1;
// 	while (round <= 5) {
// 		const humanChoice = getHumanChoice();
// 		const computerChoice = getComputerChoice();
// 		playRound(humanChoice, computerChoice);
// 		round += 1;
// 	}
// }

// playGame();

// const computerChoice = getComputerChoice();
// playRound(humanChoice, computerChoice);

if (humanScore > computerScore) {
	console.log("You win! :)");
} else {
	console.log("You lose! :(");
}
