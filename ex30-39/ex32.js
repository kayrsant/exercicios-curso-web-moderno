const percorreVetor = (numero) => {

    somaDosNumeros = 0

    for (i in numero) {
        somaDosNumeros = somaDosNumeros + numero[i]
        i++
    }

    mediaAritmetica = somaDosNumeros / i

    console.log(`Média Aritmética dos Números = ${mediaAritmetica}`)
}

percorreVetor([2, 4, 6])
percorreVetor([5, 10, 15, 60, 80])