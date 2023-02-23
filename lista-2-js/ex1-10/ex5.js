/*Crie uma função que receba dois números
e retorne se o primeiro é maior ou igual ao 2.
*/

const verificaNumeros = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return false;
    }
    return num1 >= num2;
};

console.log(verificaNumeros(0, 0))
console.log(verificaNumeros(0, "0"))
console.log(verificaNumeros(5, 1))
