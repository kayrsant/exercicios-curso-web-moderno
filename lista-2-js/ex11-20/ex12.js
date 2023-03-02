const objeto1 = {
    a: 1,
    b: 2
}

const objeto2 = {
    id: 20,
    nome: "Caneta",
    descricao: "nao preenchida."
}

const removerPropriedade = (objeto, propriedade) => {
    const novoObjeto = { ...objeto }
    delete novoObjeto[propriedade]
    return novoObjeto

}

console.log(removerPropriedade(objeto1, "a")) // retornará b:2
console.log(removerPropriedade(objeto2, "descricao")) // retornará {id: 20, nome: "Caneta"}
