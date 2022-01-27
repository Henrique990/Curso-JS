// =   x = y   x = y
// +=  x += y  x = x + y
// -=  x -= y  x = x - y
// *=  x *= y  x = x * y
// /=  x /= y  x = x / y
// %=  x %= y  X = x % y

var a = 20;
a += 10;
console.log(a);
// Resultado: 30

var a = 20;
a -= 10;
console.log(a);
// Resultado: 10

var a = 20;
a *= 10;
console.log(a);
// Resultado: 200

var a = 20;
a /= 10;
console.log(a);
// Resultado: 2

var a = 20; 
a %= 10;
console.log(a);
// Resultado: 0