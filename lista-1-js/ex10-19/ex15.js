const qualCarro = carro => {

    carro = carro.toLowerCase()

    switch(carro){

        case "hatch":
        console.log(`Compra do ${carro} efetuada com sucesso`) 
        break

        case "sedans":
        console.log("Tem certeza que não prefere este modelo?")
        break

        case "motocicletas":
            console.log("Tem certeza que não prefere este modelo?")
        break

        case "caminhonetes":
            console.log("Tem certeza que não prefere este modelo?")
        break

        default:
            console.log(`Não trabalhamos com ${carro} aqui.`)
    }
}

qualCarro("Hatch"); qualCarro("Sedans"); qualCarro("Motocicletas"); qualCarro("Caminhonetes"); qualCarro("BMW")
