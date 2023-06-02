console.log("JS file added!")

const region = "Canada"

if (region === "Canada") {
    console.log("You are seeing the canadian version of this site")
}

let price = 20
const shippingFee = 15
let cartTotal

if(price >= 50) {
    cartTotal = price
} else {
    cartTotal = price + shippingFee
}
document.getElementById("cart1").innerHTML += "Your cart total is " + cartTotal

//reassigning the price
price = 105
const discount = 0.15

if (price >= 100) {
    cartTotal = price - (price * discount)
} else if (price >= 50) {
    cartTotal = price
} else {
    cartTotal = price + shippingFee
}

console.log(cartTotal)

document.getElementById("cart2").innerHTML += "Your cart total is " + cartTotal

/* Switch */

let planet = "Mars"
let message

switch(planet) {
    case "Earth":
    message = "welcome to the third planet"
    break
    case "Mars":
    message = "welcome to the red planet"
    break
    case "Jupiter":
    message = "welcome to the largest planet"
    break
    default: 
    message = `You are on ${planet}. We do not service ${planet} yet`
}
console.log(message)

//document.getElementById("planet").innerHTML += message


// Switch EX 2 with stacking cases

let answer = "a"

switch (answer) {
    case "a":
    case "b":
    case "d":
        document.getElementById("quiz").innerHTML += "Incorrect answer, please try again"
    case "c":
        document.getElementById("quiz").innerHTML += "Perfect, you got it right"
}

// Functions

function myName(){
    return "Shyaka"
}
let firstName = myName()
console.log(firstName)

//document.querySelector(".container h1").innerHTML += " " +firstName

function changeBg (bgColor) {
    document.querySelector("body").style.backgroundColor = bgColor
// to test this function go to the console and type changeBg("cyan")
}

function textResize (newFontSize) {
    document.querySelector('html').style.fontSize = newFontSize
}
