const somenteConsoantes = string => {
    let vogais = /[aeiouà-ú]/gi;

    string = string.replace(vogais, "")
    return string
}

console.log(somenteConsoantes("Lapiseira"))