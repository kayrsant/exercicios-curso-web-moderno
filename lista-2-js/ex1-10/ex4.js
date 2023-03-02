const meses = [
    'Janeiro', 'Fevereiro', 'Março',
    'Abril', 'Maio', 'Junho', 'Julho',
    'Agosto', 'Setembro', 'Outubro',
    'Novembro', 'Dezembro']

const nomeDoMes = (mes) => mes = meses[mes - 1]

console.log(nomeDoMes(1))
console.log(nomeDoMes(4))