const lerVetores = (numeros) => {

    pares = 0
    impares = 0

    for (i in numeros) {
        if (numeros[i] % 2)
            impares++
        else
            pares++
    }

    console.log(`Pares: ${pares}, Ímpares: ${impares}`)
}

lerVetores([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
lerVetores([1, 2, 3, 4, 5, 6, 10, 15, 20, 33, 44, 60])