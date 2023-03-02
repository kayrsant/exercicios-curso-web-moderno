const menorNumero = numeros => {
    let menor = 9007199254740991
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i]
        }
    }
    return menor
}

console.log(menorNumero([1, 2, 3, 4, 5]))
console.log(menorNumero([10, 50, -15, 3]))