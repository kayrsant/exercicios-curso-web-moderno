const calculaFatorial = numero => {
    
    let resultado = numero
        
    for (i = 1; i < numero; i++) {
        resultado *= i
    }
    return `Fatorial de ${numero} = ` + resultado
}

console.log(calculaFatorial(4));
console.log(calculaFatorial(5));
