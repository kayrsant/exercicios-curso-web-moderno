function calculaBhaskara(a, b, c){
    let resultados = []
    delta = (b**2) - (4*a*c)
    if(delta < 0){
        return "Delta é negativo!"
    }

    x1 = (-b + Math.sqrt(delta)) / (2*a)
    x2 = (-b - Math.sqrt(delta)) / (2*a)

    resultados.push(x1)
    resultados.push(x2)
    return resultados
}

console.log(calculaBhaskara(3, -5, 12))
console.log(calculaBhaskara(2, 6, 4))