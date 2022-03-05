let firstCard = 11
let secondCard = 11
let sum = firstCard + secondCard

if(sum < 21){
    console.log("Do you need a new card?")
}else if(sum === 21){
    console.log("Wouhoo!!! You've got a blackjack")
}else{
    console.log("You're out of the game")
}