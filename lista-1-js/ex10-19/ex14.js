const temEssaFruta = fruta => {

    fruta = fruta.toLowerCase()

    switch(fruta){

        case "maçã":
        console.log(`Não vendemos ${fruta} aqui!`)
        break

        case "kiwi":
        console.log(`Estamos em escassez de ${fruta}.`)
        break
        
        case "melancia":
        console.log(`Aqui está! São 3 reais o quilo.`)
        break

        default:
        console.log("Erro! Fruta não encontrada no banco de dados.")
        break

    }

}

temEssaFruta("Kiwi")
temEssaFruta("Maçã")
temEssaFruta("Melancia")