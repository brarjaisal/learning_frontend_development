const message = `Hello, my name is Jaisal Brar.`
const secondMessage = '     I am learning JavaScript string methods. '
const finalMessageLower = secondMessage.trim()
const finalMessage = secondMessage.trim().toUpperCase() // this is called chaining methods where we use multiple methods on a single line
const capitalizedMessage = message.toUpperCase();
const lastFourDigits = `4336`

finalMessageLower.replace(`am`, `was`) // only replaces the first instance
finalMessageLower.replaceAll(`a`, `x`) // replaces all instances
message.concat(finalMessageLower) // joins two strings together
message.concat(` `, finalMessageLower) // joins two strings together with a space in between
lastFourDigits.padStart(16, `*`) // pads the string from the start to a total length of 16 with *
lastFourDigits.padEnd(20, `-`) // pads the string from the end to a total length of 20 with -
message.charAt(12) // gets the character at index 12
message.charCodeAt(3) // gets the Unicode of the character at index 3
message.split(` `) // splits the string into an array of substrings based on the separator provided (in this case a space)


message.length // gets the length of the string, does not require parentheses as it is a property not a method
finalMessage.includes(`LEARNING`) // checks if the string includes the substring, returns true or false
message.startsWith(`Hello`) // checks if the string starts with the substring, returns true or false
message.endsWith(`Brar.`) // checks if the string ends with the substring, returns true or false

const concatenatedString = lastFourDigits.padStart(16, `*`) + ' is the last four digits.' // concatenation example using + operator
const templateString = `Last four digits are ${lastFourDigits.padStart(16, `*`)}`    // template string example using backticks and ${} for embedding expressions     

const bankBalance = 5000

const templateStringWithBalance = `Your bank balance is $${bankBalance}` // using toFixed to format number to 2 decimal places in template string