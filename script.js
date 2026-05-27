let humanScore = 0;
let computerScore = 0;

function getComputerChoice(a) {
	let randomNum = Math.floor(Math.random() * 3);

	if (randomNum == 0) {
		return "rock";
	} else if (randomNum == 1) {
		return "paper";
	} else if (randomNum == 2) {
		return "scissors";
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

function playGame() {
	let round = 1;
	while (round <= 5) {
		const humanChoice = getHumanChoice();
		const computerChoice = getComputerChoice();
		playRound(humanChoice, computerChoice);
		round += 1;
	}
}

playGame();

if (humanScore > computerScore) {
	console.log("You win! :)");
} else {
	console.log("You lose! :(");
}
