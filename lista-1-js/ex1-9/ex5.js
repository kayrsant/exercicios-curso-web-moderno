function converteDinheiro (valorConverter, moeda){
    console.log(moeda + " " + valorConverter.toFixed(2).replace(".", ","))
}

converteDinheiro(0.30000000000000004, 'R$')
converteDinheiro(0.44444444444444444, '$')
