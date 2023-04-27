function guessGame() {
  var number = Math.random() * 11 | 0,
      guess,
      text = 'Guess a number:';
  do {
      guess = prompt(text);
      if (number < guess) {
          text = "You've guessed too high!";
      } else if (number > guess) {
          text = "You've guessed too low!";
      }
  } while (guess != number);
  document.write("Good Job!");
}
guessGame();