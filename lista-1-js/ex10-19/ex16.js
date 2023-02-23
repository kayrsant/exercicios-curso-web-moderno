const calculadora = (numeroUm, operacao, numeroDois) => {

    switch(operacao) {
        case "+":
            resultado = numeroUm + numeroDois
            console.log(`${numeroUm} + ${numeroDois} = ${resultado}`)
            break
        
        case "-":
            resultado = numeroUm - numeroDois
            console.log(`${numeroUm} - ${numeroDois} = ${resultado}`)
            break

        case "*":
            resultado = numeroUm * numeroDois
            console.log(`${numeroUm} * ${numeroDois} = ${resultado}`)
            break

        case "/":
            resultado = numeroUm / numeroDois
            console.log(`${numeroUm} / ${numeroDois} = ${resultado}`)
            break

        default:
            console.log(`Não foram informados números ou operações de forma correta.`)
            break
    }
}

calculadora(2, "+", 2)
calculadora(2, "-", 2)
calculadora(2, "*", 2)
calculadora(2, "/", 2)
calculadora(2, "++", 2)