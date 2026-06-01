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

function playRound(humanChoice, computerChoice) {
	// Draw
	if (humanChoice == computerChoice) {
		result.textContent = "It's a Draw!";
		playerScore += 1;
		computerScore += 1;
		scoreCounter.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
	}
	// Win
	if (
		(humanChoice == "rock" && computerChoice == "scissors") ||
		(humanChoice == "paper" && computerChoice == "rock") ||
		(humanChoice == "scissors" && computerChoice == "paper")
	) {
		result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
		playerScore += 1;
		scoreCounter.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
	}
	// Lose
	if (
		(humanChoice == "rock" && computerChoice == "paper") ||
		(humanChoice == "paper" && computerChoice == "scissors") ||
		(humanChoice == "scissors" && computerChoice == "rock")
	) {
		result.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
		computerScore += 1;
		scoreCounter.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
	}
}
