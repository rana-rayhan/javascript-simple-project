let randomNumber = Math.floor(Math.random() * 10) + 1;
let guessCount = 0;

const checkGuess = () => {
  const guess = document.getElementById("guess").value;
  const message = document.getElementById("message");

  if (guess < 1 || guess > 10) {
    message.innerHTML = "Please enter a number between 1 and 10.";
    return;
  } 

  guessCount++;

  if (guess == randomNumber) {
    message.innerHTML = `Congratulations! You guessed the number in ${guessCount} tries. The number is: ${guess}`;
    return;
  }

  if (guess < randomNumber) {
    message.innerHTML = "Your guess is too low. Try again.";
  } else {
    message.innerHTML = "Your guess is too high. Try again.";
  }
};
