/*Crie uma função que recebe quatro números como parâmetro
(numero, minimo, maximo, inclusivo) e retorne se o parâmetro número está
entre minimo e máximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inclusivo, ou seja, considerando se o número é igual a 
minimo ou máximo. Caso o parâmetro inclusivo não seja informado, seu
valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se número é igual a minimo ou máximo.*/


function estaEntre(minimo, maximo, numero, inclusivo = false) {
    if(inclusivo) return numero >= minimo && numero <= maximo
    return numero > minimo && numero < maximo
    }

console.log(estaEntre(10,100,50)) // retornará true
console.log(estaEntre(16,100,160)) // retornará false
console.log(estaEntre(3,150,3)) // retornará false
console.log(estaEntre(3,150,3,true)) // retornará true
