function checkTruthyValue(value) {
  if (value) {
    return "Truthy value";
  } else {
    return "Falsy value";
  }
}

console.log(checkTruthyValue(0));

console.log(checkTruthyValue(""));
console.log(checkTruthyValue("ab"));

console.log(checkTruthyValue(1));

console.log(checkTruthyValue([]));
console.log(checkTruthyValue({}));

console.log(checkTruthyValue(true));

console.log(checkTruthyValue(false));
console.log(checkTruthyValue(null));

console.log(checkTruthyValue(undefined));

console.log(checkTruthyValue(function(){}));

console.log(checkTruthyValue(NaN));

console.log(checkTruthyValue(Infinity));


//Truthy value

/**
 * Non-empty string  -> "Hello"
 * Non-zero number (positive or negative) -> 41, 52, Infinity
 * Arrays regardless of their contents ["Apple", "Orange"] , []
 * Objects regardless of their contents {a:40, b:60}, {}
 * Function
 * true
 */

// Falsy value
/**
 * Empty string -> ""
 * Zero Numbers -> 0, NaN
 * null, undefined
 * false
 */