//Null coalescing operator ??
// Comparison with logical OR operator ||
// Comparison with logical AND operator &&

//polyfill for null coalescing operator

function nullCoalescing(a, b) {
  return a !== null && a !== undefined ? a : b;
}

const result = nullCoalescing(0, 5)
console.log(result);

// ?? returns the first argument if it's not null/undefined. Otherwise the second one
// common use case to provide default value

let user;
console.log(user ?? "Invalid User" ?? "Hacker");

// comparison with ||
