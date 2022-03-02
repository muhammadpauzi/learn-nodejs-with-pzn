import util from "util";

const firstName = "Muhammad";
const lastName = "Pauzi";

console.log(`Hello ${firstName} ${lastName}`);
console.log(util.format("Hello %s %s", firstName, lastName));

const person = {
  firstName: "Muhammad",
  lastName: "Pauzi",
};

console.log(`Person : ${JSON.stringify(person)}`);
console.log("Person : %j", person);

console.log(util.types.isDate(false)); // false
console.log(util.types.isDate(new Date())); // true
console.log(util.types.isStringObject("Hello")); // false
console.log(util.types.isStringObject(new String("Hello"))); // true
console.log(util.types.isStringObject(true)); // false
