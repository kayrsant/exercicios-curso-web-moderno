const contarCaractere = (caractere, string) => {
    let quantidade = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] === caractere) {
            quantidade++
        }
    }
    return quantidade
}


console.log(contarCaractere("r", "A sorte favorece os audazes")) // retornará 2
console.log(contarCaractere("c", "Conhece-te a ti mesmo")) // retornará 1
