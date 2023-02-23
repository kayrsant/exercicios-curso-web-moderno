/*Desenvolva uma função que recebe dois números inteiros não negativos
e realize a multiplicação deles. Porém, não utilize o operador *.*/

const multiplicar = (n1, n2) => {
    let resultado = 0
    if(n1 > 0 && n2 > 0){
        for (let i = 0; i < n2; i++){
        resultado += n1;
        }
    }
    return resultado
}

console.log(multiplicar(5,5))
console.log(multiplicar(0,7))