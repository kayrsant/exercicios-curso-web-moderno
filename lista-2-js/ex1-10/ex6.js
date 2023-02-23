/*Escreva uma função que recebe um valor booleano ou número. Se o 
parâmetro for booleano, o retorno da função deverá ser o inverso.
POr exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido
1, o retorno será -1. Se o parâmetro de entrada não for nenhum dos dois
tipos acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ''".*/

const inverso = (valor) => {
    if (typeof valor === "boolean") {
        return !valor
    }
    else if (typeof valor === "number"){
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
