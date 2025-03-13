//Javascript - When first it was initially created - it had another name Livescript.
//It is fully independent language with its own specification call ECMAScript.
//ECMAScript - It is a standard for scripting language including JavaScript, JScript and Action Script

// Scripting language is a type of programming language where instructions are interpreted line by line at runtime, meaning the code is executed directly without the needing to be compiled beforehand

//Eight basic data types

//Number
let number = 123456;
console.log(typeof number);
console.log(4 / NaN ** 0 + 2);

//Besides regular number there are so callled "special numeric values" which also belongs to Number data type
//Infinity, -Infinity and NaN // typeof these are number

console.log(typeof -Infinity, typeof NaN, typeof Infinity);

//Infinity represents the mathematical Infinity. It is a special value that's greater than any number
//We can get it as a result of divison by zero or just referencing it directly.

console.log(1/0);
console.log(Infinity);

//NaN represents computational error. It is a result of an incorrect or an undefined mathematical operation for instance.
console.log("not a number" / 2);

//If there's a NaN somewhere in a mathematical expression, it propagates to the whole result to NaN except NaN ** 0 is 1;
console.log(NaN ** 0); //exponential

//String 
//There are three types of quotes
let message = "hello";
let message1 = 'Hello one';
let message2 = `Hello two`;

console.log(typeof message);

//no character type for single character only one string.

//Boolean
// Has only two values: true or false

let nameFieldChecked = true;
let ageFieldChecked = false;

console.log(typeof nameFieldChecked);

// also come as result of comparison
let age = 25;
console.log(age > 18);

//Null
//The special value does not belong to any of the types described above
//Null is just a special value which represents "nothing, "empty" or "value unknown";

let name = null;
console.log(name);
console.log(typeof name);

let newNumber = "42";
console.log(Number(newNumber));
console.log(parseInt(newNumber));
console.log(parseFloat(newNumber));


//Undefined 
//It means value is not assigned. If a variable is declared but not assigned then its value is undefined.

let value;
console.log(value);
console.log(typeof value);

//Technically it is possible to explicitly assign undefined to a variable 
let lname = "Shrestha";
lname = undefined;
console.log(lname);

//But it is not recommended. It is prefer to use null to assign an empty or unknown value to a variable when undefined is reserved as a default initial value for unassigned things.

//All above data type are called primitive data type and object is non-primitive

//Objects and Symbols
//Object are non primitive data type used to store collection of data and more complex entities in key value pair.

 const user = {
    fname: "Deepak",
    lname: "Shrestha",
    age: 30
 }

 console.log(typeof user);
 

 const symbol = Symbol("id")
 console.log(typeof symbol);
 
//  console.log("42"++4);
var z = 1;
y = z = console.log(typeof y);