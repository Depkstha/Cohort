const starLevels = [["*", "*", "*"], ["*", "*"], ["*"]]; //output = 6

function totalStars(starLevels) {
  let totalStars = 0;
  starLevels.forEach((level) => {
    totalStars += level.length;
  });

  return totalStars;
}

function totalStarsMethodTwo(starLevels) {
  let total = 0;
  for (let i = 0; i < starLevels.length; i++) {
    total += starLevels[i].length;
  }

  return total;
}

console.log(totalStars(starLevels));
console.log(totalStarsMethodTwo(starLevels));

// calaculate total price of groceries
const prices = [1.5, 2.3, 3.7]; // output 7.5

function totalPrice(prices) {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
  }

  return total;
}

console.log(totalPrice(prices));

function totalPriceMethodTwo(prices) {
  let total = 0;
  prices.forEach((price) => {
    total += price;
  });
  return total;
}

console.log(totalPriceMethodTwo(prices));

//method three reduce
function totalPriceMethodThree(prices) {
  return prices.reduce((total, num) => total + num, 0);
}

console.log(totalPriceMethodThree(prices));

//print diamond pattern
const n = 4;

function shinyDiamondRug(n) {
  for (let i = 1; i < n; i++) {
    let star = "*";
    let space = " ";
    console.log(star.repeat(i))
  }
}

