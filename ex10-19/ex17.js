const calculaNovoSalario = (salarioAtual, planoDeTrabalho) => {

    planoDeTrabalho = planoDeTrabalho.toLowerCase()
    switch(planoDeTrabalho){

        case "a":
        salarioAtual = salarioAtual + (salarioAtual * 0.10)
        console.log(`Novo salário é: ${salarioAtual}`)
        break

        case "b":
        salarioAtual = salarioAtual + (salarioAtual * 0.15)
        console.log(`Novo salário é: ${salarioAtual}`)
        break

        case "c":
        salarioAtual = salarioAtual + (salarioAtual * 0.20)
        console.log(`Novo salário é: ${salarioAtual}`)
        break

        default:
        console.log(`{planoDeTrabalho} não é um plano de trabalho válido.`)
    }

}

calculaNovoSalario(2000, "A"); calculaNovoSalario(2000, "B"); calculaNovoSalario(6000, "C"); calculaNovoSalario(6000, "D")