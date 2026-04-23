/*DATA TYPES & VARIABLES*/
/***---- STRINGS----***/

/*console.log(`FrontEnd Simplified`.length)

let str = `FrontEnd Simplified`
console.log(str[19 - 1])

/***--- NUMBERS ---***
 * TRY to understand: %: modular: remainder of division ---
 * > use to check if a number is even or odd 
 * '/' : division
 * '*' : multiplication
 * '-' : subtraction
 * '+' : addition
 * /

/***---BOOLEANS ---*** TRUE or FALSE ***/

/**** --- NULL & UNDEFINED --- ****/
// console.log(123)

///////**** --- VARIABLES --- ****//////

/*let fullName = `Dixie Vo`
let isRaining = false
let outPlanet = `Mars`
let temperature = 30 

temperature = temperature + 2 

// console.log(temperature)
//*** Const = CANNOT REASSIGN ANY variable is set by Const.****/

// const temperature = 30
// temperature = temperature + 2 
// temperature = temperature + 2 // This would cause an error BECAUSE THE TEMPERATURE WAS ALREADY SET TO 30 AND CANNOT BE REASSIGNED.

// console.log(temperature)

/* EXERCISE: CONVERTING TEMPERATURES *
*
*Celsius-to-Fahrenheit formula:
* F = (C * 9/5) + 32
*/

//  --->FINISHED THE EXERCISE and the Variables session ====>>> and move on for the next one.

///*******------------- CONDITIONALS --------------*****/
// let subscribed = true
// let loggedIn = false
// if (subscribed ===  false) {
//     console.log(`show the video`)
// }
// else if (loggedIn === true) {
//     console.log(`tell user to upgrade their subscription to able to watch the video`)
// }
// else {
//     console.log(`tell user to log into account`)
// }
// /* only ONE command/request can be executed in a conditional statement.*/

// let cash = 60
// let price = 52

// if (cash > price) {
//     console.log(`you have enough money to buy this item - here's $ ${cash - price} your changes`)
// }
// else if (cash === price) {
//     console.log(`you paid the exact amount - Have a nice day!`)
// }
// else {
//     console.log(`not enough money - you still own $ ${price - cash}. `)
// }


/*OPERATORS 
let cash = 50
let price =40
let isStoreOpen = true
if(cash >= price && isStoreOpen === true) {
    console.log(`print the receipt`)
} */

/*TERNARY OPERATOR*/
let cash = 30
let price = 40
let isStoreOpen = true

let str = cash >= price && isStoreOpen ? `give receipt` : `do not give receipt`
console.log(str)