/**
 * Short Circuiting
 * 
 * Short circuiting is a behaviour exhibited by logical operators (&&, ||) where the evaluation of the second operand is skipped if the outcome can be determined by evaluating the first operand alone.
 * 
 * Use cases
 * 
 * Providing default values
 * Safely accessing nested properties
 */


// The && operator return the first falsy operand, or last truthy operand if all operand are truthy 
const value = 0;
const result = value && "Truthy value";
console.log(result);

// The || operator return the first truthy operand, or last falsy operand if all operand are falsy
const name = "";
const displayName = name || "Guest";
console.log(displayName);


//Practical use cases
const options = {};
const limit = options.limit || 10;
console.log(limit);

const user = { address: { city: 'New York' } };
const city = user.address && user.address.city;
console.log(city);

