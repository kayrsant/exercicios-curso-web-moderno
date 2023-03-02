const criaNovoArray = a => {
    return [a[0], a[a.length - 1]];
}

console.log(criaNovoArray([1, 2, 3, 4, 5]));
console.log(criaNovoArray([2, 3, 5]));