function segundoMaior(numeros) {
    const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
    const segundoMaior = numerosOrdenados[1]

    return segundoMaior
}

console.log(segundoMaior([1, 2, 3]))
console.log(segundoMaior([10, 5, 8]))
console.log(segundoMaior([4, 7, 9, 6]));