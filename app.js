/*DATA TYPES & VARIABLES*/
/***---- STRINGS----***/

console.log(`FrontEnd Simplified`.length)

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
let fullName = `Dixie Vo`
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

let celsius = 20;
let fahrenheit = celsius * 1.8 + 32;

console.log(fahrenheit);
