/*Crie uma função que recebe um número (1 a 12)
e retorne o mês correspondente como uma string.
Por exemplo, se o número for 2, a função deve 
retornar "Fevereiro", pois este é o 2 mês.
*/

const meses = [
    'Janeiro', 'Fevereiro', 'Março', 
    'Abril', 'Maio', 'Junho', 'Julho', 
    'Agosto', 'Setembro', 'Outubro', 
    'Novembro', 'Dezembro']

const nomeDoMes = (mes) => mes = meses[mes - 1]

console.log(nomeDoMes(1))
console.log(nomeDoMes(4))