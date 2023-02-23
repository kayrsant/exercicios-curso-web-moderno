/* Crie uma função que receba uma array e retorne
o primeiro e o último elemento desse array como um
novo array.*/

const criaNovoArray = a => {
    return [a[0], a[a.length - 1]];
}

console.log(criaNovoArray([1, 2, 3, 4, 5]));
console.log(criaNovoArray([2, 3, 5]));