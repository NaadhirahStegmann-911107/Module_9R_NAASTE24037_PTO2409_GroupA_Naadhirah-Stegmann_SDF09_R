// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard +5
let hasBlackJack = false
let isAlive = true 

if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Woohoo! You've got Blackjack! 🥳")
    hasBlackJack = true
} else {
    console.log("You're out of the game! 😭")
    isAlive = false
}


console.log(sum)
