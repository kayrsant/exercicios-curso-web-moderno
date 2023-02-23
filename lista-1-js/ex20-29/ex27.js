const calcularAltura = (alturaUm, taxaDeCrescimentoAnualUm, alturaDois, taxaDeCrescimentoAnualDois) => {

    anos = 0
    if (alturaUm == alturaDois) {
        console.log("As duas alturas são iguais!")
    }

    if (alturaUm > alturaDois) {
        alturaUm = [alturaDois, alturaDois = alturaUm][0]
        taxaDeCrescimentoAnualUm = [taxaDeCrescimentoAnualDois, taxaDeCrescimentoAnualDois = taxaDeCrescimentoAnualUm][0]
    }

    if (taxaDeCrescimentoAnualUm > taxaDeCrescimentoAnualDois) {
        anos = (alturaDois - alturaUm) / (taxaDeCrescimentoAnualUm - taxaDeCrescimentoAnualDois)
        console.log(`A criança menor ultrapassará em ${anos} anos`)
    } else {
        console.log('A criança menor não ultrapassará a altura da maior.')
    }
}

calcularAltura(43, 2, 45, 3)
calcularAltura(43, 3, 45, 2)
calcularAltura(45, 2, 42, 3)