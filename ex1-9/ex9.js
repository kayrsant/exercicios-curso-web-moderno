function verificaAprovacao (nota) {
    let notaArredondada = arredondar(nota)

    if (notaArredondada >= 40) {
        console.log(`Aprovado com nota ${notaArredondada}!`)
    } else {
        console.log(`Reprovado com nota ${nota}!`)
    }
}
function arredondar (nota){
    if (nota % 5 <= 3){
        return nota + (nota % 5)
    } else{
        return nota + 1
    }
}

verificaAprovacao(37); verificaAprovacao(38); verificaAprovacao(100); verificaAprovacao(84); verificaAprovacao(29)