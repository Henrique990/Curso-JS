// 1/8  What is the value of result?

let array = [1, 2, 3];
let result = array[3];

console.log(`The result of question 1 is: ${result}`); // result: undefined

// 2/8  What is the value of result?

let obj = Object.assign({
    name: "JavaScript"
}, {
    name: "ECMAScript"
}, {
    name: "LiveScript"
});

result = obj.name;

console.log(`The result of question 2 is: ${result}`);

// 3/8  What is the value of result?

array = [1, 2, 3, 5];
result = array.indexOf(3);

console.log(`The result of question 3 is: ${result}`);

// 4/8  Which of this same as result += value?

console.log(`The result of question 4 is: result = result + value`);


// 5/8  What is the value of result?

let o = {
    name: "Brendan"
};
let s = JSON.parse(JSON.stringify(o));
result = s === o;

console.log(`The result of question 5 is: ${result}`);

// 6/8  What is the value of result?

result = "2009" - "1995";
console.log(`The result of question 6 is: ${result}`);

// 7/8  Which of these IS NOT a logical operator?

/*
&&
!
|
||
*/
console.log(`The result of question 7 is: '|'`);

// 8/8  What is the value of result?

let re = /java/i;
let str = "JavaScript";
result = re.test(str);

console.log(`the result of question 8 is: ${result}`);