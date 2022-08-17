function anoBissexto(ano){

    if(ano %4 == 0){
        if(ano % 100 == 0){
            if(ano % 400 == 0){
                console.log(`${ano} é um ano bissexto`)
        } else{
            console.log(`${ano} não é um ano bissexto`)
        }
    } else {
        console.log(`${ano} é um ano bissexto`)
    }
} else{
    console.log(`${ano} não é um ano bissexto`)
}
}

anoBissexto(2022); anoBissexto(2000); anoBissexto(1600); anoBissexto(1900)