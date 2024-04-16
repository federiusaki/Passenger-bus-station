// document.getElementById("count-el").innerText = 5

// let count = 0
// console.log(count)

// let myAge = 32
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge);

// let bonusPoints = 50

// bonusPoints = bonusPoints +50
// console.log(bonusPoints)

// bonusPoints = bonusPoints -75
// console.log(bonusPoints)

// bonusPoints = bonusPoints +45
// console.log(bonusPoints)

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function logs() {
//     console.log(lap1+lap2+lap3)
// }
// logs()

/* let lapsCompleted = 0

function laps(){
    lapsCompleted = lapsCompleted + 1
}

laps()
laps()
console.log(lapsCompleted)
laps()

console.log(lapsCompleted) */

let countElem = document.getElementById("count-el");
let count = 0;
let saveElem = document.getElementById("save-el")

function increment(){
    count = count + 1
    countElem.innerText = count
}

function save(){
    let entries = count + " - "
    let reset = 0
    countElem.innerText = reset
    saveElem.textContent += entries
}




/* let myName = "fede";
let greetings = "Hi, my name is "
let myGreetings = greetings + myName

console.log(myGreetings) */

/* let welcomeElem = document.getElementById("welcome-el");

let myName = "fede";
let greetings = "hi, im the verga "

welcomeElem.innerText = greetings + myName;
 */
