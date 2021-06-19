// get the button id to add a click function
document.getElementById('button').addEventListener('click', randomizer)
// set the number for the user's guess and the math behind the random generated number
let userGuess = 0
let randomNumber = Math.floor(Math.random() * 30 + 1)

// the function for the output of the user input
function randomizer() {
  // get the user input id and string the userguess and the random number
  userGuess = document.getElementById('type').value
  userGuess = parseInt(userGuess)
randomNumber = parseInt(randomNumber)

if (userGuess == randomNumber) {
  document.getElementById('answer').innerHTML = "You win!"
  } else if (userGuess > randomNumber) {
    document.getElementById('answer').innerHTML = "Too much cookies! Try again!"
  } else if (userGuess < randomNumber) {
    document.getElementById('answer').innerHTML = "Not enough cookies! Try again!"
  } else {
    document.getElementById('answer').innerHTML = "Invalid"
  } 
}

// function for the output of the user input for Alice's animation
function game() {
  alice = parseInt(alice)
  if (userGuess == randomNumber) {
  document.getElementById('alice').style.backgroundImage = "url('./images/HappyAlice.jpg')"
  } else {
    document.getElementById('alice').style.backgroundImage = "url('./images/SadAlice.PNG')"
  } 
}