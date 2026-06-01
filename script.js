const content = document.querySelector("#content");

const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");

const roundCounter = document.querySelector("#round");
const scoreCounter = document.querySelector("#score");

const resetButton = document.createElement("button");
resetButton.classList.add("newGame");
resetButton.textContent = "New Game";

let playerScore = 0;
let computerScore = 0;

let round = 1;

buttons.forEach((element) => {
	element.addEventListener("click", (event) => {
		const humanChoice = element.textContent.toLowerCase();
		const computerChoice = getComputerChoice();

		if (round < 5) {
			playRound(humanChoice, computerChoice);
			round += 1;
			roundCounter.textContent = `Round: ${round}`;
		} else {
			result.textContent =
				playerScore > computerScore ? "You won! :)" : "You lose! :(";

			content.appendChild(resetButton);

			resetButton.addEventListener("click", () => {
				content.removeChild(resetButton);

				round = 1;
				roundCounter.textContent = "Round: 1";

				playerScore = 0;
				computerScore = 0;
				scoreCounter.textContent = "Player: 0 | Computer: 0";

				result.textContent = "";
			});
		}
	});
});

function getComputerChoice() {
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
