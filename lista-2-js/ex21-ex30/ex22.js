const funcaoDaSorte = (numero) => {
    const numeroGerado = +((Math.random() * 10).toFixed(0));

    if (numeroGerado === numero) {
        return "Parabéns! Você escolheu: " + numero + " Número sorteado: " + numeroGerado
    } else {

        return "Que pena! Você escolheu: " + numero + " Número sorteado: " + numeroGerado
    }
}

console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(5))