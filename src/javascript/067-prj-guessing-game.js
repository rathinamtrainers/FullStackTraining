let correctNumber = 7;
let guess;

do {
    guess = parseInt(prompt("Guess a number between 1 and 10: "));
    if (guess !== correctNumber) {
        console.log("Try again!");
    }
} while (guess !== correctNumber);

console.log("Congratulations! You guessed the correct number.");
