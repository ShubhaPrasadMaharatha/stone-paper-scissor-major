document.addEventListener("DOMContentLoaded", () => {
    const choices = document.querySelectorAll(".choice");
    const userChoiceDisplay = document.getElementById("user-choice");
    const computerChoiceDisplay = document.getElementById("computer-choice");
    const resultDisplay = document.getElementById("result");

    choices.forEach(choice => choice.addEventListener("click", playGame));

    function playGame(event) {
        const userChoice = event.target.id;
        const computerChoice = getComputerChoice();
        const result = getResult(userChoice, computerChoice);

        userChoiceDisplay.textContent = `Your choice: ${capitalize(userChoice)}`;
        computerChoiceDisplay.textContent = `Computer's choice: ${capitalize(computerChoice)}`;
        resultDisplay.textContent = `Result: ${result}`;
    }

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function getResult(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "It's a draw!";
        }

        if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            return "You win!";
        } else {
            return "You lose!";
        }
    }

    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
});
