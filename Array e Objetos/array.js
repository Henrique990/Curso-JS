// o que são vetores ou arrays

// como declarar um array
let array = ['string', 1, true, null, undefined, {}, [], function(){}];
//console.log(array);
// Resultado: [ 'string', 1, true, null, undefined, {}, [], function () {} ]

// O array pode guardar qualquer tipo de dado incluindo outros arrays
let array2 = [ 0, 1, 2, [array]];
//console.log(array2);
// Resultado: [ 0, 1, 2, [ [ 'string', 1, true, null, undefined, {}, [], function () {} ] ] ]

// usando o método forEach para percorrer o array
array2.forEach(function(item, index){
console.log(item, index)});


// usando o método push para adicionar um novo item no array
array2.push('novo item');
console.log(array2);

//usando o método pop para remover um item no final do array
array2.pop();
console.log(array2);

//usando o método shift para remover um item no inicio do array
array2.shift();
console.log(array2);

//usando o método unshift para adicionar um item no inicio do array
array.unshift('novo item');
console.log(array);

//usando o método indexOf para encontrar o indice de um item no array
console.log(array.indexOf('string'));

//usando o método splice para remover um item específico do array
array.splice(0, 1);
console.log(array);

//usando o método slice para copiar um item específico do array
let array3 = array.slice(0, 2);
console.log(array3);

