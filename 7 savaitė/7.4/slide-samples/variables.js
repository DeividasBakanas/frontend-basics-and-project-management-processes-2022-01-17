const stringConstant = "some string";
const numberConstant = 3.14;
const booleanConstant = false;
const arrayConstant = ["some", "array", "of", "single", "type", "elements"];
const arrayConstantMix = ["some string", 3.14, false, ["some", "array", "of", "single", "type", "elements"]];
const emptyConstant = undefined;
const objectConstant = {
    stringEntry: "some-string",
    booleanEntry: true,
    arrayEntry: ["some", "array", "of", "single", "type", "elements"],
    undefinedEntry: undefined,
    objectEntry: {
        stringEntry: "let's do that again",
        doThatAgain: false,
    },
};

var stringGlobalVariable = "some string";
var numberGlobalVariable = 3.14;
var booleanGlobalVariable = false;
var arrayGlobalVariable = ["some", "array", "of", "single", "type", "elements"];
var arrayGlobalVariableMix = ["some string", 3.14, false, ["some", "array", "of", "single", "type", "elements"]];
var emptyGlobalVariable = undefined;
var objectGlobalVariable = {
    stringEntry: "some-string",
    booleanEntry: true,
    arrayEntry: ["some", "array", "of", "single", "type", "elements"],
    undefinedEntry: undefined,
    objectEntry: {
        stringEntry: "let's do that again",
        doThatAgain: false,
    },
};

let stringLocalVariable = "some string";
let numberLocalVariable = 3.14;
let booleanLocalVariable = false;
let arrayLocalVariable = ["some", "array", "of", "single", "type", "elements"];
let arrayLocalVariableMix = ["some string", 3.14, false, ["some", "array", "of", "single", "type", "elements"]];
let emptyLocalVariable = undefined;
let objectLocalVariable = {
    stringEntry: "some-string",
    booleanEntry: true,
    arrayEntry: ["some", "array", "of", "single", "type", "elements"],
    undefinedEntry: undefined,
    objectEntry: {
        stringEntry: "let's do that again",
        doThatAgain: false,
    },
};

function addTwoNumbers(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

const numberAdder = addTwoNumbers;

// console.log - turinio išvedimo į konsolę funkcija
console.log(addTwoNumbers(1, 2)); // Rezultatas 3;
console.log(numberAdder(1, 2)); // Rezultatas 3;

var labaiKintamas = "string"; // Dabar tipas 'string'
labaiKintamas = 12.2; // Dabar tipas 'number'
labaiKintamas = []; // Dabar tipas 'array'
labaiKintamas = {}; // Dabar tipas 'object'
labaiKintamas = null; // Dabar tipas 'object', bet nusakoma, kad objektas neturi reikšmės

const a = 12;
const b = 13;
const rez = a + b; // 25
const sum = 12 + 13; // 25
const stringSum = "foo" + "bar"; // "foobar"

{
    const b = 12;
    const c = b;
    console.log(c); // 12
}

{
    const a = 12;
    const b = 2;
    console.log(a - b); // 10
    console.log(2 * 5); // 10
    console.log(10 / 2); // 5
}

{
    console.log(true === false);    // false
    console.log(5 === 12)           // false
    console.log(100 === 100);       // true
    console.log(5 !== 12);          // true
    console.log(100 !== 100);       // false
    console.log(5 < 12);            // true
    console.log(5 > 12);            // false
    console.log(100 < 100);         // false
    console.log(100 > 100);         // false
}
