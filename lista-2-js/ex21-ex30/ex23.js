/*Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.*/

function contaPalavra(string) {
    let palavras = string.split(" ");
    return palavras.length;
}

console.log(contaPalavra("Hello World"))
console.log(contaPalavra("Eu gosto é demaizi"))