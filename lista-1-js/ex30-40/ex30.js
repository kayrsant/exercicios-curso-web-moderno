const percorreVetor = (numero) => {

    maiorValor = 0
    menorValor = 0
    for (i in numero) {
        if (maiorValor < numero[i]) {
            maiorValor = numero[i]
        }

        if (menorValor == 0) {
            menorValor = numero[i]
        }

        if (numero[i] < menorValor) {
            menorValor = numero[i]
        }
    }
    console.log(`Maior Valor: ${maiorValor} Menor Valor: ${menorValor}`)
}


percorreVetor([2, 3, 4, 5, 20, 6, 7, 8, 15, -20])