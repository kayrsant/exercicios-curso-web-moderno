const somaTodos = array => {
    return array.reduce((acumulador, atual) => acumulador + atual)
}

console.log(somaTodos([10, 10, 10]))
console.log(somaTodos([15, 15, 15, 15]))