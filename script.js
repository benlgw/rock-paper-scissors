let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
	let humanPick = prompt("Rock, Paper, or Scissors? : ").toLowerCase();
	return humanPick;
}

function playRound(humanChoice, computerChoice) {
	// Draw
	if (humanChoice == computerChoice) {
		console.log("It's a Draw!");
	}
	// Win
	if (
		(humanChoice == "rock" && computerChoice == "scissors") ||
		(humanChoice == "paper" && computerChoice == "rock") ||
		(humanChoice == "scissors" && computerChoice == "paper")
	) {
		console.log(`You win! ${humanChoice} beats ${computerChoice}`);
	}
	// Lose
	if (
		(humanChoice == "rock" && computerChoice == "paper") ||
		(humanChoice == "paper" && computerChoice == "scissors") ||
		(humanChoice == "scissors" && computerChoice == "rock")
	) {
		console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
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

// const humanChoice = getHumanChoice();
// const computerChoice = getComputerChoice();
// playRound(humanChoice, computerChoice);

const buttons = document.querySelectorAll("button");

buttons.forEach((element) => {
	element.addEventListener("click", (event) => {
		alert(`You clicked ${element.textContent}`);
	});
});

if (humanScore > computerScore) {
	console.log("You win! :)");
} else {
	console.log("You lose! :(");
}
