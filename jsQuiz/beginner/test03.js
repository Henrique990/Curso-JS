// What is the value of result?

let func = function () {
    return 2009;
}
let result = 262 && func();

console.log(`the result of question 1 is: ${result}`);

/*
O && lógico retorna o operando esquerdo, se pode ser convertido em falso;
caso contrário, retorna o operando direito.
*/

//--------------------------------------------------------------------------------

// What is the value of result?

let value = new Set([1, 2, 3]);
value.add(1);
result = value.size;

console.log(`the result of question 2 is: ${result}`);

//---------------------------------------------------------------------------------

// What is the value of result?

result = ~~(12.34);

console.log(`the result of question 3 is: ${result}`);

//----------------------------------------------------

// What is the value of result?

result = "1_2_3".split("_"); 

console.log(`the result of question 4 is: ${result}`);

//---------------------------------------------------------------

// What is the value of result?

let f = (r, v) => r + v;
result = [1, 2, 3].reduce(f, 0);

console.log(`the result of question 5 is: ${result}`);


result = "Henrique Teixeira".split("e");
console.log(result)