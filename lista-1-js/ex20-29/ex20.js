const calculaQuaisNotas = (valor) => {

    notas100 = 0
    notas50 = 0
    notas10 = 0
    notas5 = 0
    notas1 = 0

    if(valor >= 100){
        while(valor >= 100){
            valor = valor - 100
            notas100++
        }
    } 

    if(valor >= 50){
        while(valor >= 50){
            valor = valor - 50
            notas50++
        }
    }

    if(valor >= 10){
        while(valor >= 10){
            valor = valor - 10
            notas10++
        }
    }

    if(valor >= 5){
        while(valor >= 5){
            valor = valor - 5
            notas5++
        }
    }

    if(valor >= 1){
        while(valor >= 1){
            valor = valor - 1
            notas1++
        }
    }

    if(notas100 >= 1){
        console.log(`Notas de R$ 100 = ${notas100}`)
    } 

    if(notas50 >= 1){
        console.log(`Notas de R$ 50 = ${notas50}`)
    }

    if(notas10 >= 1){
        console.log(`Notas de R$ 10 = ${notas10}`)
    }

    if (notas5 >= 1){
        console.log(`Notas de R$ 5 = ${notas5}`)
    }

    if (notas1 >= 1){
        console.log(`Notas de R$ 1 = ${notas1}`)
    }

    console.log("")
}

calculaQuaisNotas(160); calculaQuaisNotas(3975); calculaQuaisNotas(18)