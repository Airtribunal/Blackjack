let player = {
  name: "Ramazan",
  chips: ": $" + 145,
  sayHello: function() {
    console.log("Hello");
  }
}
let sum = 0
let cards = []
let hasBlackjack = false
let isAlive = false
let wannaDraw = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardEl = document.querySelector("#card-el")
let sumEl = document.querySelector("#sum-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + player.chips
player.sayHello()

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
      return randomNumber
    }
}

function startGame() {
  let firstCard = getRandomNumber()
  let secondCard = getRandomNumber()
  cards = [firstCard, secondCard]
  sum = cards[0] + cards[1]
  isAlive = true
  document.getElementById("button-start").onclick = null

  renderOut()
}


function renderOut() {
  sumEl.textContent = "Sum: " + sum
  cardEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++){
    cardEl.textContent += cards[i] + " "
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card?"
    let wannaDraw = true
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
    let hasBlackjack = true
    let wannaDraw = true
  } else {
    message = "You are out of the game!"
    let isAlive = false
    document.getElementById("button-draw").onclick = null
  }
  messageEl.textContent = message
  if (sum >= 21) {
    document.getElementById("button-draw").onclick = null
  }
}

function drawCard() {
  if (isAlive === true && hasBlackjack === false) {
      let card = getRandomNumber()
      cards.push(card)
      sum += card
      renderOut()
      sumEl.textContent = "Sum: " + sum
      if (sum >= 21) {
        document.getElementById("button-draw").onclick = null
      }
    }
}

function restartGame() {
  document.location.reload()
} 