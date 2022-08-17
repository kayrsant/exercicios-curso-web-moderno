const queDiaE = numero => {

    switch(numero){
        case 1:
        console.log(`${numero} é domingo, logo não é dia útil.`)
        break;
        
        case 2: 
        console.log(`${numero} é segunda, logo é dia útil.`)
        break
        
        case 3:
        console.log(`${numero} é terça, logo é dia útil.`)
        break

        case 4:
        console.log(`${numero} é quarta, logo é dia útil.`)
        break

        case 5:
        console.log(`${numero} é quinta, logo é dia útil.`)
        break
        
        case 6:
        console.log(`${numero} é sexta. Este é o último dia útil da semana!`)
        break

        case 7:
        console.log(`${numero} é sábado, logo não é dia útil.`)
        break
    }
}

queDiaE(2)
queDiaE(7)
queDiaE(1)