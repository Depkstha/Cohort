// Four logical operator in js
// 1. OR ||
// 2. AND &&
// 2. NOT !
// 4. Nullish coalescing ??

// OR ||

console.log(true || false);
console.log(false || true);
console.log(true || false);
console.log(false || false);

// if an operand is not a boolean, it's converted to a boolean for evaluation

//  Process
// it is in an if statement to test if any of the given condition is true
// evaluates operands from left to right
// for each operand, convert it to boolean. If result is true, stops and return the original value of that operand
// If all operands have been evaluated and all are false then returns last operand

let distance = 9;
if(distance > 10 || distance < 15) {
    console.log("Distance is within limit");  
}

// || finds first truthy value if not return last value
const result = "" || 0 || null || undefined || false || NaN;
console.log(result);   // return last falsly value if not truthy value

const result1 = 1 || {};
console.log(result1); // return first truthy value

const result2 = [] || {};
console.log(result2);

