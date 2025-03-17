"use strict";

//parameter accepted in reduce accumulator, currentValue, currentIndex, callbackFn, array, intialValue
//use case
//1. Summarizing values into a single value
//2. Grouping similar items together
//3. Removing dumplcates from an array
//4. Piping more than one function

const pipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => fn(acc), initialValue);

const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

const multiply6 = pipe(double, triple);

console.log(multiply6);

console.log(multiply6(6));

const items = [
  { name: "Apple", category: "Fruit" },
  { name: "Onion", category: "Vegetable" },
  { name: "Orange", category: "Fruit" },
  { name: "Lettuce", category: "Vegetable" },
];

const groupItems = items.reduce((acc, { name, category }) => {
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(name);
  return acc;
}, {});

console.log(groupItems);

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

const groupItemsTwo = Object.groupBy(items, ({name, category}) => category); 
console.log(groupItemsTwo);


const restock = { restock: true };
const sufficient = { restock: false };
const result = Object.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? "restock" : "sufficient",
);
console.log(result);

