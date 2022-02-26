const DIO = 'Digital Innovation ONe';

let firstName = 'João';
let lastName = 'Luiz';

let fullName = `Nome completo: ${firstName} ${lastName}`;

console.log(fullName); // resultado: João Luiz


//=========================================================


let nome = "João"; // nome: João
let sobrenome = "Pedro"; // sobrenome: Pedro
console.log(nome.concat(sobrenome)); /* o metodo concat concatena a variavel 'nome' com a 'sobrenome'

    O que pode ser feito de uma maneira não tão pratica.Exempo:

        let nome = "João";
        let sobrenome = "Pedro";
        let nomeCompleto = nome + sobrenome;
        console.log(nomeCompleto);*/

let concatenado = nome.concat(sobrenome); // transformand o metodo concat em uma variavel
console.log(concatenado.length); /* Resultado 9
        A propriedade .length é um objeto que conta o comprimento da string
                                */

console.log(concatenado[1]); // Resultado: o
console.log(concatenado[4]); // Resultado: P


/* Formas de escrever em JavaScript*/

concatenado = nome + " " + sobrenome; // Reatribuindo a variavel 'concatenado' com espaço entre os nomes
console.log(concatenado);
concatenado = nome + "\n" + sobrenome; // Reatribuindo a vareavel 'concatenado' com quebra de linha
console.log(concatenado);


// Utilizando Craze `
concatenado = `${nome} ${sobrenome}`; // Com a craze é possivel usar as variaveis com uma sintexe melhor
console.log(concatenado)// Resultado: João Pedro


// Como imprimir Aspas ""

concatenado = "\""; // reatribuindo variavel com o valor de aspas ""
console.log(concatenado); // Resultado: "


// UTIIZANDO O METODO "SPLIT"

let frase = "Olá, tudo bem?"; //criando variavel com valor "Olá, tudo bem?"
console.log(frase.split("")); /* O metodo split separa todos os espaços dentro da strigin.
                                 O resultado do metodo split("") seria a separação de
                                 todas as letras e espaços da string.*/

console.log(frase.split(" "));/* Neste caso o metodo split ira separar tudo que esta 
                                 entre espaco " " na string, sendo assim o 
                                 resultado é a separação das palavras. */

// UTILIZANDO O METODO "INCLUDES"

console.log(frase.includes("bem?"))// resultado: true
                                      /* O metodo .includes retorna um valor booleano
                                      (true ou false), ela retorna um valor 
                                      sobre a string dentro da variavel. Ele
                                      procura se existe o valor dentro da variavel */
                                    
// UTILIZANDO O METODO "startsWith"                                      
//Como perguntar se a frase dentro da variavel começa com a letra 'O'?    

console.log(frase.startsWith("O")); //resultado: true
console.log(frase.startsWith("R")); //resultado: false