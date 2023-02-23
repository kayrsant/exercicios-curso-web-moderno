/*Elabore uma função que recebe um número como
parâmetro e retorne uma string com o símbolo
"+" na quantidade especificada no parâmetro.*/

const simboloMais = (numero) =>{
    let arrayMais = []
    for(let i = 0; i < numero; i++){
    arrayMais[i] = "+" 
    }
    return arrayMais.join("")
}

console.log(simboloMais(2))
console.log(simboloMais(4))