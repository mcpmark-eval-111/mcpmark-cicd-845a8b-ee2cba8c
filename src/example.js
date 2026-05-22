// Example file with intentional linting violations
// This file should fail the ESLint check defined in .eslintrc.json

var unusedVariable = "this variable is never used";

function greet(name) {
    console.log("Hello, " + name)
    var anotherUnused = 42
    return "Greetings"
}

const message = "Welcome to the project"
greet("World")
