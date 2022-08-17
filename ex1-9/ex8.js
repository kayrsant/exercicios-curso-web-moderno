function jogosBasquete (pontuacoes){
    pontuacoes = pontuacoes.split(",")
    let pontuacaoInt = pontuacoes.map(pontos => Number(pontos))
    let maior = pontuacoes[0]
    let menor = pontuacoes[0]

    recorde = 0
    piorPontuacao = 1

    for (i = 0; i < pontuacaoInt.length; i++){
        if(pontuacaoInt[i] > maior){
            maior = pontuacaoInt[i]
            recorde++
        } else if (pontuacaoInt[i] < menor){
            menor = pontuacaoInt[i]
            piorPontuacao = i + 1
        }
    }
    return [recorde, piorPontuacao]
}

console.log(jogosBasquete("10, 20, 20, 8, 25, 3, 0, 30, 1"))
console.log(jogosBasquete("10, 20, 30, 8, 35, 3, 0, 32, 10, 20, 40"))
