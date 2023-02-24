/*Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.
*/

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