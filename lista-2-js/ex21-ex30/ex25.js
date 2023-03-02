const buscarPalavrasSemelhantes = (buscado, array) => {
    console.log(array.filter(palavra => palavra.toLowerCase().includes(buscado.toLowerCase())));
}

buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", “profissional"]

buscarPalavrasSemelhantes("python", ["Javascript", "java", "cse"]) // retornará []

