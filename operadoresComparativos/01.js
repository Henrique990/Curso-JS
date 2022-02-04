// == igual a
// === valor igual e igual
// != não é igual
// !== não é igual e não é do mesmo tipo
// > maior que
// < menor que
// >= maior ou igual
// <= menor ou igual

console.log(1 == 1);
// Retorna true

var a = 1;
var b = 2;
console.log(a == b);
// Retorna false

var a = 1;
var b = "1";
console.log(a == b);
// Retorna true
console.log(a === b);
// Retorna false

var a = 10;
var b = "10";
console.log(a != b);
// Retorna false
console.log(a !== b);
// Retorna true

var a = 3;
var b = 4;
console.log(a > b); //a menor que b retorna false
console.log(a < b); //a maior que b retorna true

var a = 3;
var b = 3;
console.log(a >= b); //a maior ou igual a b retorna true
console.log(a <= b); //a menor ou igual a b retorna true



