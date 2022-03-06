// Try to modify the expression so that we get a range from 1 to 6
// let randomNumber = Math.floor( Math.random() * 7 )

// console.log(randomNumber) 

function rollDice(){
    let randomNumber = Math.floor( Math.random() * 7 )
    return randomNumber
}

document.write(rollDice())