const valorASerPago = (idade) => {

    let valorASerPago = 100

    if (idade < 10) {
        valorASerPago += 80
    }

    if (idade > 10 && idade <= 30) {
        valorASerPago += 50
    }

    if (idade > 30 && idade <= 60) {
        valorASerPago += 95
    }

    if (idade > 60) {
        valorASerPago += 130
    }

    console.log(`Conveniado com ${idade} anos irá pagar R$ ${valorASerPago}`)

}

valorASerPago(20); valorASerPago(60); valorASerPago(7); valorASerPago(90)