const calculaMedia = conjunto => {
    let soma = 0
    for (let i = 0; i < conjunto.length; i++) {
        soma += conjunto[i]
    }
    return soma / conjunto.length
}

console.log(calculaMedia([0, 10]))
console.log(calculaMedia([1, 2, 3, 4, 5]))


