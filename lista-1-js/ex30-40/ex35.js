let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]


    console.log('Vetor inicial: ' + vetorPilha)
function adicionaVetor(vetorInicial, vetorAdicionar) {
    for(let i = 0; i < vetorAdicionar.length; i++) {
        vetorInicial.push(vetorAdicionar[i])
    }
    console.log('Vetor adicionado: ' + vetorAdicionar)
    console.log('Vetor resultado: ' + vetorInicial)
}

adicionaVetor(vetorPilha, vetorAdiciona)