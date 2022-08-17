const juroSimples = (capitalInicial, taxaDeJuros, TempoDeAplicacao) => {
    return capitalInicial * (taxaDeJuros/100) * TempoDeAplicacao
}

const juroComposto = (capitalInicial, taxaDeJuros, TempoDeAplicacao) => {
    return capitalInicial * (1 + (taxaDeJuros/100)) ** TempoDeAplicacao;
}

console.log("Juro Simples: " + juroSimples(20, 2, 5).toFixed(2))
console.log("Juro Composto: " + juroComposto(20, 2, 5).toFixed(2))