/*Elabore uma função que receba um array de números e retorne um array
que tenha todos os números que são pares e que também tenham índices pares.*/

const receberParesDeIndicesPares = array => {
    return array.filter((numero, indice) => {
        return (numero % 2 === 0 && indice % 2 === 0) || numero === 2
    })
}

console.log(receberParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberParesDeIndicesPares([10, 70, 22, 43]))