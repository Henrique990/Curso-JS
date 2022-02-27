let obj = {}; // criando um objeto vazio
console.log(`1- resultado: ${typeof obj}`); // a variavel obj é um objeto

obj.name = "julia"; // adicionando chave ao objeto
console.log(obj); // resultado: { name: 'julia' }

obj.age = 20; // adicionando chave ao objeto
console.log(obj); // resultado: { nome: 'julia', age: 20 }

console.log(Object.values(obj)); // resultado: [ 'julia', 20 ]
                                 /* O Object.values serve para mostrar o valor
                                 do objeto, no caso o resultado é julia e 20. */

console.log(Object.keys(obj)); // resultado: [ 'name', 'age' ]
                               /* O Object.keys serve para mostrar as chaves
                               do objeto, no caso o resultado é name e age. */

let person = {  // criando um novo objeto
    name: "Julia",
    age: 20,
    adress: "Rua 2"
};

console.log(person); // resultado: { name: 'Julia', age: 20, adress: 'Rua 2' }

person.local = "altinopolis";
console.log(person)