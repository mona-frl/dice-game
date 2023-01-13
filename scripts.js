function rollDice() {
  // random number generator + image change for player 1
  randomNumber1 = Math.floor(Math.random() * 6) + 1;
  // image changing
  imageSource1 = "images/dice" + randomNumber1 + ".png";
  image1 = document
    .querySelectorAll("img")[0]
    .setAttribute("src", imageSource1);

  // random number generator + image for player 2
  randomNumber2 = Math.floor(Math.random() * 6) + 1;
  imageSource2 = "images/dice" + randomNumber2 + ".png";
  image2 = document
    .querySelectorAll("img")[1]
    .setAttribute("src", imageSource2);

  //if player 1 wins
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
  } //if player 2 wins
  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
  } //else it's a draw
  else {
    document.querySelector("h1").innerHTML = "It's a draw!";
  }
}

