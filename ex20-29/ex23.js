const calculaMediaPonderada = (codigoAluno, notaUm, notaDois, notaTres) => {

    if (codigoAluno >= 0) {
        mediaPonderada = ((notaUm * 4) + (notaDois * 3) + (notaTres * 3)) / (4 + 3 + 3)
        mediaPonderada = mediaPonderada.toFixed(2)

        if (mediaPonderada >= 5) {
            console.log(`Aluno: ${codigoAluno}, Nota 1: ${notaUm}, Nota 2: ${notaDois}, Nota 3: ${notaTres}, Média: ${mediaPonderada}, APROVADO!`)
        }

        if (mediaPonderada < 5) {
            console.log(`Aluno: ${codigoAluno}, Nota 1: ${notaUm}, Nota 2: ${notaDois}, Nota 3: ${notaTres}, Média: ${mediaPonderada}, REPROVADO!`)
        }
    }
}

calculaMediaPonderada(0, 5, 7, 9);
calculaMediaPonderada(1, 4.4, 4.8, 4.9);
calculaMediaPonderada(-1, 10, 10, 10);
calculaMediaPonderada(2, 10, 10, 10)