const quantosNumeroEntre = (numero) => {

    numerosEntre = 0
    numerosFora = 0

    for(i in numero) {
        if(numero[i] >= 10 && numero[i] <= 20){
            numerosEntre++
        } else {
            numerosFora++
        }
    }
    console.log(`Números dentro: ${numerosEntre}, Números fora: ${numerosFora}`)
}

quantosNumeroEntre([1, 10, 15, 20, 21])
quantosNumeroEntre([10, 14, 15, 20, 22, 25, 30])