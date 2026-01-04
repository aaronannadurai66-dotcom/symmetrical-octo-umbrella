

// sample prices array
const prices = [150, 299, 49, 120];

// 1) Using a for loop to calculate total
let total = 0;
for (let i = 0; i < prices.length; i++) {
  total += prices[i];
}
console.log("Total (for loop):", total);

// 2) Optional: using Array.prototype.reduce to calculate total
// reduce runs a callback over all elements, accumulating a single value. :contentReference[oaicite:0]{index=0}
const totalReduce = prices.reduce((accumulator, current) => accumulator + current, 0);
console.log("Total (reduce):", totalReduce);
