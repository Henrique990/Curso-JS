let array = ['array', 'para guardar', 'dados'];


let object = { 
    string: 'string', 
    number: 1, 
    boolean: true, 
    array: [array],  
    objectinterno: {objectinterno: 'objectinterno'}};

console.log(object);

let string = object.string;
console.log(string);

let array2 = object.array;
console.log(array2);

let {number, boolean} = object;
console.log(number, boolean);