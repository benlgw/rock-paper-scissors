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
	// player picks rock
	if (humanChoice == "rock") {
		if (computerChoice == "scissors") {
			console.log("You win! Rock beats scissors!");
			humanScore += 1;
		} else if (computerChoice == "paper") {
			console.log("You lose! Paper beats rock");
			computerScore += 1;
		} else {
			console.log("Its a draw!");
		}
		// player picks paper
	} else if (humanChoice == "paper") {
		if (computerChoice == "rock") {
			console.log("You win! paper beats rock!");
			humanScore += 1;
		} else if (computerChoice == "scissors") {
			console.log("You lose! scissors beats paper");
			computerScore += 1;
		} else {
			console.log("Its a draw!");
		}
		// player picks scissors
	} else if (humanChoice == "scissors") {
		if (computerChoice == "paper") {
			console.log("You win! scissors beats paper!");
			humanScore += 1;
		} else if (computerChoice == "rock") {
			console.log("You lose! rock beats scissors");
			computerScore += 1;
		} else {
			console.log("Its a draw!");
		}
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
