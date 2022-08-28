const calculaValorAnuidade = (valorASerPago, mesPago) => {

    switch (mesPago) {

        case 1:
            console.log(`Obrigado por pagar no mês correto. Total sem juros: R$ ${valorASerPago}`)
            break

        case 2:
            semJuros = valorASerPago
            juros = valorASerPago * 0.05
            valorASerPago = valorASerPago + juros
            console.log(`Você está pagando atrasado. Por isso fora adicionados R$ ${juros} à sua parcela mensal de R$ ${semJuros}. Total: R$ ${valorASerPago}`)
            break

        case 3:
            semJuros = valorASerPago
            juros = valorASerPago * 0.05
            valorASerPago = valorASerPago + (juros * 2)
            console.log(`Você está pagando atrasado. Por isso fora adicionados R$ ${juros*2} à sua parcela mensal de R$ ${semJuros}. Total: R$ ${valorASerPago}`)
            break

        case 4:
            semJuros = valorASerPago
            juros = valorASerPago * 0.05
            valorASerPago = valorASerPago + (juros * 3)
            console.log(`Você está pagando atrasado. Por isso fora adicionados R$ ${juros*3} à sua parcela mensal de R$ ${semJuros}. Total: R$ ${valorASerPago}`)
            break

        case 5:
            semJuros = valorASerPago
            juros = valorASerPago * 0.05
            valorASerPago = valorASerPago + (juros * 4)
            console.log(`Você está pagando atrasado. Por isso fora adicionados R$ ${juros*4} à sua parcela mensal de R$ ${semJuros}. Total: R$ ${valorASerPago}`)
            break

        case 6:
            semJuros = valorASerPago
            juros = valorASerPago * 0.05
            valorASerPago = valorASerPago + (juros * 5)
            console.log(`Você está pagando atrasado. Por isso fora adicionados R$ ${juros*5} à sua parcela mensal de R$ ${semJuros}. Total: R$ ${valorASerPago}`)
            break

        case 7:
            semJuros = valorASerPago
            juros = valorASerPago * 0.05
            valorASerPago = valorASerPago + (juros * 6)
            console.log(`Você está pagando atrasado. Por isso fora adicionados R$ ${juros*6} à sua parcela mensal de R$ ${semJuros}. Total: R$ ${valorASerPago}`)
            break

        case 8:
            semJuros = valorASerPago
            juros = valorASerPago * 0.05
            valorASerPago = valorASerPago + (juros * 7)
            console.log(`Você está pagando atrasado. Por isso fora adicionados R$ ${juros*7} à sua parcela mensal de R$ ${semJuros}. Total: R$ ${valorASerPago}`)
            break

        case 9:
            semJuros = valorASerPago
            juros = valorASerPago * 0.05
            valorASerPago = valorASerPago + (juros * 8)
            console.log(`Você está pagando atrasado. Por isso fora adicionados R$ ${juros*8} à sua parcela mensal de R$ ${semJuros}. Total: R$ ${valorASerPago}`)
            break

        case 10:
            semJuros = valorASerPago
            juros = valorASerPago * 0.05
            valorASerPago = valorASerPago + (juros * 9)
            console.log(`Você está pagando atrasado. Por isso fora adicionados R$ ${juros*9} à sua parcela mensal de R$ ${semJuros}. Total: R$ ${valorASerPago}`)
            break

        case 11:
            semJuros = valorASerPago
            juros = valorASerPago * 0.05
            valorASerPago += (juros * 10)
            console.log(`Você está pagando atrasado. Por isso fora adicionados R$ ${juros*10} à sua parcela mensal de R$ ${semJuros}. Total: R$ ${valorASerPago}`)
            break

        case 12:
            semJuros = valorASerPago
            juros = valorASerPago * 0.05
            valorASerPago = valorASerPago + (juros * 11)
            console.log(`Você está pagando atrasado. Por isso fora adicionados R$ ${juros*11} à sua parcela mensal de R$ ${semJuros}. Total: R$ ${valorASerPago}`)
            break

        default:
            console.log(`O mês ou número informado não puderam ser calculados.`)
            break
    }

    console.log("")

}

calculaValorAnuidade(220, 1); calculaValorAnuidade(220, 10); calculaValorAnuidade(220, 11); calculaValorAnuidade(3000, "janeiro"); calculaValorAnuidade(3000, 12)