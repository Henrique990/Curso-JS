// COMO SABER SE UM NUMERO É PAR OU IMPER

let num = 2;
console.log(num % 2); // resultado: 0 
                      // quando o resultado é zero significa
                      // que o numero é par.

let num1 = 9;
console.log(num1 % 2 ); // resultado: 1
                        /* Se o resultado for 1 significado
                           que o numero é impar.*/


//================================================

// USANDO MATH.FLOOR
let fiveByThree = 5 / 3; // a variavel fiveByThree recebe o valor 5 / 3
console.log(fiveByThree); // resultado: 1.666666666667

console.log(Math.floor(fiveByThree)); // resultado: 1
                                      /* o Math.floor arredonda o numero para 
                                         baixo.*/

// USANDO MATH.CEIL
console.log(Math.ceil(fiveByThree)); // resultado: 2
                                     /* o Math.ceil arrendo o numero para
                                        cima.*/