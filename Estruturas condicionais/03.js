let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let objeto = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3' };

// for - executa uma instrução até que ela seja falsa
for(let indice = 0; indice < array.length; indice++) {
    console.log(array[indice]);
}

console.log('proximo exemplo:');

// for/in executa reperição a partir de uma propriedade
// com array
for( let i in array){
    console.log(i);
}

// com objeto
console.log('proximo exemplo:');
for (i in objeto) {
    console.log(i);
}

// for/of - executa repetição a partir de valor
// com array
console.log('proximo exemplo:');
for(i of array) {
    console.log(i);
}