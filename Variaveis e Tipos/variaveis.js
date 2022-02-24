var firstName = "João"; // Variavel com escopo global
let lastName = "Souza"; // Variavel com escopo de bloco

if (firstName === "João") { // firstName é estritamente igual a "João" ate esse momento do codigo
    var firstName = "Pedro"; // a variavel "firstName" foi alterada para Pedro
    let lastName = "Silva"; // a variavel "lastName" foi alterada para Silva, mas como foi usado o let ela tem escopo de bloco

    console.log(firstName, lastName); // dentro do bloco o resultado do console se "Pedro Silva"
}

console.log(firstName, lastName); // fora do bloco o resultado do console é "Pedro Souza"