/*Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números.*/

const calculaMedia = conjunto => {
    let soma = 0
    for (let i = 0; i < conjunto.length; i++) {
        soma += conjunto[i]
    }
    return soma / conjunto.length
}

console.log(calculaMedia([0, 10]))
console.log(calculaMedia([1, 2, 3, 4, 5]))


