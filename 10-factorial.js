
// Script that computes factorial recursively

// Recursive factorial function
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Get first argument
const arg = parseInt(process.argv[2], 10);

// Compute factorial
const result = isNaN(arg) ? 1 : factorial(arg);

// Print the result
console.log(result);
