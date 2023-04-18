// Assignment Values & Variables
const country = "USA";
const continent = "North America";
let population = 300000000;

console.log(country);
console.log(continent);
console.log(population);

// Assignment Data types
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let, const, var
language = "English";

// basic operators
const halfPopulation = population / 2;
population++;
console.log(population);
let finlandPopulation = 6000000;
const compareUSAFinland = population > finlandPopulation;
const averagePopulation = 33000000;
const compareUSAAverage = population < averagePopulation;
population--;
// const description =
//   country +
//   " is in " +
//   continent +
//   ", and its " +
//   population +
//   " people speak " +
//   language +
//   ".";
// console.log(description);

////////////////////////////////////
// coding challenge #1

// test data 1
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

// const markWeight = 95;
// const markHeight = 1.88;
// const johnWeight = 85;
// const johnHeight = 1.76;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

// console.log(markBMI, johnBMI);

// console.log(markHigherBMI);

// Template literals

/*

const description = `${country} is in ${continent}, and its ${population} people speak ${language}.`;
console.log(description);

// Taking Decisions: if / else statements
if (population > 33000000) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${averagePopulation - population} below average`
  );
}

////////////////////////////////////
// coding challenge #2
if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}


const averageDolphins = (97 + 112 + 101) / 3;
const averageKoalas = (109 + 95 + 106) / 3;

console.log(averageDolphins, averageKoalas);

// if (averageDolphins > averageKoalas) {
//   console.log(`Dolphins win!`);
// } else if (averageDolphins < averageKoalas) {
//   console.log(`Koalas win!`);
// } else {
//   console.log(`We have a tie!`);
// }

if (averageDolphins < 100 && averageKoalas < 100) {
  console.log(`Minimum score not met!`);
} else if (averageDolphins > averageKoalas) {
  console.log(`Dolphins win!`);
} else if (averageDolphins < averageKoalas) {
  console.log(`Koalas win!`);
} else {
  console.log(`We have a tie!`);
}
*/

// Coding challenge #4

const bill = 40;

const tip = 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value was ${
    bill + tip
  }`
);
