/*Desenvolva uma função que recebe como parâmetro um objeto e retorne
um array de arrays, em que cada elemento é um array formado pelos pares
chave/valor que corresponde a um atributo do objeto.*/

const objetoParaArray = objeto => {
    const resultado = []

    for (const chave in objeto) {
        const valor = objeto[chave]
        resultado.push([chave, valor])
    }

    return resultado
}


console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora"
}))

console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
}))