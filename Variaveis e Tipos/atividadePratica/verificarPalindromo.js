 /*
 Atividade 1
Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a 
direita ou vice-versa (ex.: raiar, ama, ovo, radar)
*/

// solução 1
function verificaPalindromo(string) {
    if (!string) return;

    return string.split("").reverse("").join("") === string;
    console.log(verificaPalindromo(string));
}
