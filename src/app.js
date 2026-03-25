const math = require('./math');

console.log("Starting dummy app...");

function greet(name) {
  console.log("Hello, " + name); // Added closing parenthesis
}

greet("Tester");

// Intentional syntax error below
if (true) {
  console.log("This is fine");
} // Added missing closing brace
