const mesmaQuantidadeDeCaracteres = (stringUm, stringDois) => {
  let estaContido = true;

  for (let i = 0; i < stringUm.length; i++) {
    let caractereStringUm = stringUm.charAt(i).toLowerCase();
    for (let j = 0; j < stringDois.length; j++) {
      let caractereStringDois = stringDois.charAt(j).toLowerCase();
      if (caractereStringUm == caractereStringDois) {
        estaContido = true;
        break;
      } else {
        estaContido = false;
      }
    }
    if (!estaContido) {
      return estaContido;
    }
  }
  return estaContido;
};

console.log(mesmaQuantidadeDeCaracteres("Pizza", "Pizzaiolo"));
console.log(mesmaQuantidadeDeCaracteres("Teste", "Testa"));
console.log(mesmaQuantidadeDeCaracteres("Pedra", "Tesoura"));