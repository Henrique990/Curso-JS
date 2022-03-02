function substituirPares(array) { // função 'substituirPares' recebe valar 'array'

    if (!array) return -1;
    if (!array.length) return -1; 

    for (let i = 0; i < array.length; i++) { // criando laço for para repetir a array desde que seja menor que 'i', 'i++' vai incrementar ate o valor ser igual a 'i'
        if (array[i] === 0) { // Se o elemento 'array[i]' for igual a '0' faça...
            console.log("Você já é zero!!") // imprima na tela "Vocé já é zero!"
        } else if (array[i] % 2 === 0) { // se não, compare o elemento 'array[i] % 2 === 0'
            console.log(`Substituindo ${array[i]} por 0...`) // imprima na tela
            array[i] = 0; // reatribuindo valor de array, valor igual a zero

        }
        
    }

    return array;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(substituirPares(arr));