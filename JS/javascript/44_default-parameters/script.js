// Default params

function multiply(a, b = 1) {
  return a * b
}

// default value overrides undefined it does not change null or falsy value eg an empty string

function rollADice(numberOfSides = 6) {
    return Math.floor(Math.random() * numberOfSides) + 1
}