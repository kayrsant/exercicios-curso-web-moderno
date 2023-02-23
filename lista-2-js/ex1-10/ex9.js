/*Escreva uma função que receba dois parâmetros.
O primeiro parâmetro é o elemento que repetirá,
enquanto o segundo será o número de vezes que
haverá repetição. Um array será retornado.*/

const repetir = (elemento, vezes) =>{
    return Array(vezes).fill(elemento)
}

console.log(repetir("código", 3))
console.log(repetir(7, 3))