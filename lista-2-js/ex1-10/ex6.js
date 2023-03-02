const inverso = (valor) => {
    if (typeof valor === "boolean") {
        return !valor
    }
    else if (typeof valor === "number") {
        return valor * -1
    }
    else {
        return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`
    }
}

console.log(inverso(true)) // retornará false
console.log(inverso("6")) // retornará string
console.log(inverso(-2000)) // retornará 2000
console.log(inverso("programação")) // retornará string
