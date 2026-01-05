const ages = [12, 17, 18, 20, 15, 25, 30];

const adults = ages.filter(function (age) {
  return age >= 18;
});

console.log("Adult ages:", adults);
const totalAge = ages.reduce(function (sum, age) {
  return sum + age;
}, 0);

console.log("Total age:", totalAge);