const despesasTotais = produto => {
    let total = 0
    for (let i = 0; i < produto.length; i++) {
        total += produto[i].preco
    }
    return total
}

console.log(despesasTotais([
    { nome: "Jornal", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 }
]))
console.log(despesasTotais([
    { nome: "S20 FE", categoria: "Eletrônicos", preco: 2099.99 },
    { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90 }
]))