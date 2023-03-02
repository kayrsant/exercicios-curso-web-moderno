const checarAnoBissexto = ano => {
    if (ano % 4 === 0 && ano % 100 !== 0) {
        return true
    } else if (ano % 400 === 0) {
        return true
    } else {
        return false
    }
}

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))