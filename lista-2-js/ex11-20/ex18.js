/*Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal, dessa
aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e preço.
Uma funcionalidade que você está desenvolvendo no momento é a de somar o total de despesas.
Crie uma função que receba um array de produtos e retorne o total de despesas.*/

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