// This file intentionally contains linting violations
// to demonstrate the CI workflow catching them.

var unusedVariable = "I am never used";
const message = "Hello from example.js"
console.log(message)

function greet(name) {
    var unusedParam = "unused"
    return "Hi, " + name
}

greet("World")
