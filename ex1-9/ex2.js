const qualTrianguloE = (a, b, c) => {
    if (a < (b+c) && b < (a+c) && c < (a+b)){
        if (a == b && b == c){
            console.log("Triângulo Equilátero!")
        } else if ( a == b || a == c || c == b){
            console.log("Triângulo Isósceles!")
        } else { 
            console.log("Triângulo Escaleno!")

        }
    } else{
        console.log("Não foram informadas medidas!")

    }
}

qualTrianguloE(2, 2, 3); qualTrianguloE(5, 5, 5); qualTrianguloE(2, 3, 4); qualTrianguloE()