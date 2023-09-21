// if the value is truthy, print true
// --6
// --true
// "I am a string"
//if the value is falsy, should print corresponding result:
//if the value is false, expected print should be "The boolean value false is falsy"
//if the value is null, expected print should be "The null value is falsy"
// if the value is undefined, expectd print should be "undefined is falsy"
// if the value is 0, expected print should be "The number 0 is falsy(the only falsy number)"
// if the value is "", expected print should be "The empty string is falsy (the only falsy string)"

// null value does not have null datatype

const input = "";

if (input) {
    console.log(true);
} else {
    const inputType = typeof input;
    console.log("inputType =",inputType);
    if (inputType === "boolean") {
        console.log("The boolean value false is falsy");
    
    } else if (inputType === "object") {
        console.log("The null value is falsy");

    } else if (inputType === "undefined") {
        console.log("undefined is falsy");

    } else if (inputType === "number") {
        console.log("The number 0 is falsy (the only falsy number)");
    } else if (inputType === "string") {
        console.log("The empty string is falsy (the only falsy string)");
    }
}

// Take the sum of two numbers
// Print a result based on the output

const num1 = 50;
const num2 = 51;

/*
sum + " is less than -1000";
sum + " is a negative number";
sum + " is equal to 0";
--sum + " is larger than 0";
--sum + " is greater than 100";
*/

const sum = num1+num2;

// > <= <=

if (sum > 100) {
    console.log(sum + " is greater than 100");
} else if (sum > 0) {
        console.log(sum + " is larger than 0");
} else if (sum === 0) {
    console.log(sum + " is equal to 0");
} else if (sum > -1000) {
    console.log(sum + " is a negative number");
} else {
    console.log(sum + " is less than -1000");
}

const num3 = 99;
const num4 = -2;

/*
sum + " is less than -1000";
sum + " is a negative number";
sum + " is equal to 0";
--sum + " is larger than 0";
--sum + " is greater than 100";
*/

const sum1 = num3+num4;

// > <= <=

if (sum1 > 100) {
    console.log(sum1 + " is greater than 100");
} else if (sum1 > 0) {
        console.log(sum1 + " is larger than 0");
} else if (sum1 === 0) {
    console.log(sum1 + " is equal to 0");
} else if (sum1 > -1000) {
    console.log(sum1 + " is a negative number");
} else {
    console.log(sum1 + " is less than -1000");
}

const num5 = 0;
const num6 = 101;

/*
sum + " is less than -1000";
sum + " is a negative number";
sum + " is equal to 0";
--sum + " is larger than 0";
--sum + " is greater than 100";
*/

const sum2 = num5+num6;

// > <= <=

if (sum2 > 100) {
    console.log(sum2 + " is greater than 100");
} else if (sum2 > 0) {
        console.log(sum2 + " is larger than 0");
} else if (sum2 === 0) {
    console.log(sum2 + " is equal to 0");
} else if (sum2 > -1000) {
    console.log(sum2 + " is a negative number");
} else {
    console.log(sum2 + " is less than -1000");
}

const num7 = 500;
const num8 = -500;
/*
sum + " is less than -1000";
sum + " is a negative number";
sum + " is equal to 0";
--sum + " is larger than 0";
--sum + " is greater than 100";
*/

const sum3 = num7+num8;

// > <= <=

if (sum3 > 100) {
    console.log(sum3 + " is greater than 100");
} else if (sum2 > 0) {
        console.log(sum3 + " is larger than 0");
} else if (sum3 === 0) {
    console.log(sum3 + " is equal to 0");
} else if (sum3 > -1000) {
    console.log(sum3 + " is a negative number");
} else {
    console.log(sum3 + " is less than -1000");
}


const num9 = -1000;
const num10 = 0;
/*
sum + " is less than -1000";
sum + " is a negative number";
sum + " is equal to 0";
--sum + " is larger than 0";
--sum + " is greater than 100";
*/

const sum4 = num9+num10;

// > <= <=

if (sum4 > 100) {
    console.log(sum4 + " is greater than 100");
} else if (sum4 > 0) {
        console.log(sum4 + " is larger than 0");
} else if (sum4 === 0) {
    console.log(sum4 + " is equal to 0");
} else if (sum3 > -1000) {
    console.log(sum4 + " is a negative number");
} else {
    console.log(sum4 + " is less than -1000");
}

const num11 = -5;
const num12 = 0;
/*
sum + " is less than -1000";
sum + " is a negative number";
sum + " is equal to 0";
--sum + " is larger than 0";
--sum + " is greater than 100";
*/

const sum5 = num11+num12;

// > <= <=

if (sum5 > 100) {
    console.log(sum5 + " is greater than 100");
} else if (sum4 > 0) {
        console.log(sum5 + " is larger than 0");
} else if (sum5 === 0) {
    console.log(sum5 + " is equal to 0");
} else if (sum3 > -1000) {
    console.log(sum5 + " is a negative number");
} else {
    console.log(sum5 + " is less than -1000");
}

// Given two values, print true if both parameters are greater than or equal to 5
//otherwiise print false

const num18 = 5;
const num19 = 6;

// true
if (num18 >= 5 && num19 >= 5) {
    console.log(true);
} else {
    console.log(false);
}

const num20 = 10;
const num21 = 11;


if (num20 >= 5 && num21 >= 5) {
    console.log(true);
} else {
    console.log(false);
}

const num22 = 0;
const num23 = 0;


if (num22 >= 5 && num23 >= 5) {
    console.log(true);
} else {
    console.log(false);
}

const num24 = 1000;
const num25 = -1000;


if (num24 >= 5 && num25 >= 5) {
    console.log(true);
} else {
    console.log(false);
}

const num26 = 6;
const num27 = 4;


if (num26 >= 5 && num27 >= 5) {
    console.log(true);
} else {
    console.log(false);
}

const num16 = 5;
const num17 = 5;


if (num16 >= 5 && num17 >= 5) {
    console.log(true);
} else {
    console.log(false);
}

// Get two sets of values
// eg [cat, cat] and [6,"6"]
// if one pair matches
// print true
// otherwise print false

const param1A = "cat";
const param1B = "cat";
const param2A = 6;
const param2B = "6";

// || or logical operator to compare the two sets of data

const result1 = param1A === param1B;
const result2 = param2A === param2B;

console.log(result1, result2);
console.log(result1 || result2);