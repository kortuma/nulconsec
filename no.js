// Example spec object with normalizeEncoding function
let spec = {
  normalizeEncoding: function(input) {
    // Implementation of normalizeEncoding
    return input.toUpperCase();
  }
};

// Destructuring assignment to extract normalizeEncoding
const { normalizeEncoding } = spec;

// Calling normalizeEncoding with a sample input
let result = normalizeEncoding('abc123');

console.log(result); // Output: "ABC123"
