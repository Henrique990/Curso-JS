let array = []; // criando uma array vazia

array.push(3); // o metodo push serve para adicionar elementos
console.log(array); // resultado: [3]

array.push(2); // adicionando numero dois
console.log(array); // resultado: [3, 2]

array.pop(); // o metodo pop retira o elemento no final do array
console.log(array); // resultado: [3] 
                    // o metodo pop retirou o numero 2

array.push(2, 5); // adicionando 2 novos elementos
console.log(array); // resultado: [3, 2, 5]

array.shift(); // o meto shift retira o primeiro elemento a array
console.log(`5) O resultado é [${array}]`); // resultado: [ 2, 5 ]

array.push(6, 7, 8, 9); // adicionando mais elementos

// USANDO O "FOR"
for(let i = 0; i < array.length; i++){// O for esta sendo usando para imprimir todos o console.log
    console.log(`6) o resultado é ${array[i]}`);
}

console.log(array.includes(7)); // resultado: true

console.log(array.every(item => item === 5)); // resultado: false

console.log(array.some(item => item === 5)); // resultado: true

console.log(array.reverse()); // resultado: [ 9, 8, 7 ,6, 5, 2 ]