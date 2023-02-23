const fazPotencia = (base, expoente) => {
    let i = 1
    while (i<expoente){
        base = base*base
        i = i + 1
    }
    console.log(base)
}

fazPotencia(4,3)