const calculaValorASerPago = (codigo, quantidade) => {

    switch(codigo){

        case 100:
            preco = 3*quantidade
            preco = preco.toFixed(2)
            console.log(`${quantidade} Cachorro-Quente: R$ ${preco}`)
            break

        case 200:
            preco = 4*quantidade
            preco = preco.toFixed(2)
            console.log(`${quantidade} Hambúrguer Simples: R$ ${preco}`)
            break

        case 300:
            preco = 5.50*quantidade
            preco = preco.toFixed(2)
            console.log(`${quantidade} Cheeseburguer: R$ ${preco}`)
            break

        case 400:
            preco = 7.50*quantidade
            preco = preco.toFixed(2)
            console.log(`${quantidade} Bauru: R$ ${preco}`)
            break

        case 500: 
            preco = 3.50*quantidade
            preco = preco.toFixed(2)
            console.log(`${quantidade} Refrigerante: R$ ${preco}`)
            break

        case 600:
            preco = 2.80*quantidade
            preco = preco.toFixed(2)
            console.log(`${quantidade} Suco: R$ ${preco}`)
            break

        default:
            console.log("Código não existente.")
    }

}

calculaValorASerPago(100, 5); calculaValorASerPago(200, 3); calculaValorASerPago(300, 2); calculaValorASerPago(400, 6); 
calculaValorASerPago(500, 4); calculaValorASerPago(600, 3); calculaValorASerPago(700, 2)