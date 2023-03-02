const filtrarNumeros = array => {
    return array.filter(elemento => typeof elemento === "number")
}


console.log(filtrarNumeros(["JavaScript", 1, "3", "Web", 20])) // retornará [1,20]
console.log(filtrarNumeros(["a", "c"])) // retornará []