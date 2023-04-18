/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Russell");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jones_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

console.log(myFirstJob);


true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// This won't work, const can't be reassigned
// birthYear = 1990;
// This also won't work, const needs an initial value
// const job;

var job = "programmer";
job = "teacher";

// Not a good practice to do this. Variables should be declared otherwise JS creates a property on the global object
lastName = "Lee";
console.log(lastName);


// math operators
const now = 2037;
const ageRussell = now - 1994;
const ageSarah = now - 2020;
console.log(ageRussell, ageSarah);

console.log(ageRussell * 2, ageRussell / 10, 2 ** 3);
// 2 **3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Russell";
const lastName = "Lee";
console.log(firstName + " " + lastName);

// assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x* 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

// comparison operators
console.log(ageRussell > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageRussell = now - 1994;
const ageSarah = now - 2020;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
const averageAge = (ageRussell + ageSarah) / 2;
console.log(averageAge);


const firstName = "Russell";
const job = "developer";
const birthYear = 1994;
const year = 2037;

const russell =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + ".";

console.log(russell);

const russellNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}.`;

console.log(russellNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String with
multiple
lines`);


const age = 15;
// const isOldEnough = age >= 18;

if (age >= 18) {
  console.log(`Sarah can start her driver's license 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1998;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


const inputYear = "1991";
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

console.log(Number("Russell"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old"); //string when using +
console.log("23" - "10" - 3); //number when using -
console.log("23" / "2"); //number when using /
console.log("23" * "2"); //number when using *
console.log(2 + 3 + 4 + "5");


// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Russell"));
console.log(Boolean({}));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 100;
if (money) {
  console.log(`Don't spend it all ;)`);
} else {
  console.log(`You should get a job!`);
}


const age = "18";

if (age === 18) {
  console.log(`You just became an adult (strict)`);
}

if (age == 18) {
  console.log(`You just became an adult (loose)`);
}

const favorite = Number(prompt(`What's your favorite number?`));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 13) {
  console.log("Cool! 13 is an amazing number");
} else if (favorite === 7) {
  console.log(`7 is also a cool number`);
} else {
  console.log(`That is not a cool number`);
}

if (favorite !== 13) {
  console.log("Why not 13?");
}


const hasDriversLicense = true;
const hasGoodVision = true;

// AND
console.log(hasDriversLicense && hasGoodVision);
// OR
console.log(hasDriversLicense || hasGoodVision);
// NOT
console.log(!hasDriversLicense || hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log(`Sarah is able to drive`);
} else {
  console.log(`Someone else should drive...`);
}


const day = `saturday`;

switch (day) {
  case `monday`: // day === 'monday'
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
    break;
  case "tuesday":
    console.log(`Prepare theory videos`);
    break;
  case "wednesday":
  case "thursday":
    console.log(`Write code examples`);
    break;
  case "friday":
    console.log(`Record videos`);
    break;
  case "saturday":
  case "sunday":
    console.log(`Enjoy the weekend :D`);
    break;
  default:
    console.log(`Not a valid day!`);
}

if (day === "monday") {
  console.log(`Monday`);
} else if (day === "tuesday") {
  console.log(`Tuesday`);
} else if (day === "wednesday" || day === "thursday") {
  console.log(`Wednesday/Thursday`);
} else if (day === "friday") {
  console.log(`Friday`);
} else if (day === "saturday" || day === "sunday") {
  console.log(`Saturday/Sunday`);
} else {
  console.log(`Not a valid day! if stmt`);
}
*/

const age = 21;
// age >= 18
//   ? console.log(`I like to drink wine 🍷`)
//   : console.log(`I like to drink water 💧`);

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);
