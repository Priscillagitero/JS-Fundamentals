
// Script that adds two integers using a function

// Define the add function
function add(a, b) {
  return a + b;
}

// Get command-line arguments
const a = parseInt(process.argv[2], 10);
const b = parseInt(process.argv[3], 10);

// Print the result
console.log(add(a, b));
