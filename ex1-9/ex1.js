function fazOperacoes (a, b){
    return {
        soma: a+b,
        sub: a-b,
        mult: a*b,
        div: a/b
    }
}

const resultado = fazOperacoes(1,2)
console.log('Soma: '+ resultado.soma + ' Subtração: ' + resultado.sub)
console.log('Multiplicação: '+ resultado.mult + ' Divisão: '+ resultado.div)

/* alternativa:
console.log(fazOperacoes(1,2))
*/