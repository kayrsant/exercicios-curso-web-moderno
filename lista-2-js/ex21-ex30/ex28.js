const numerosComDigitos = (array, digito) => {
    return array.filter(numero => numero.toString().length === digito)
}

console.log(numerosComDigitos([2, 3, 10, 20, 543], 2))