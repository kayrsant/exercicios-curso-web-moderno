const percorreVetor = (numero) => {

    contador = 0
    for (i in numero) {
        if (numero[i] < 0) {
            contador++
        }
    }

    console.log(`${contador}`)
}

percorreVetor([5, 1, 7, -10, -36, -20, -5])