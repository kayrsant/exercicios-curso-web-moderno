/*Desenvolva uma função que recebe dois
parâmetros: um é a quantidade de horas
trabalhadas por um funcionário em um mês,
e o quanto ele recebe por hora. O retorno
da função deve ser a string:
"Salário igual a R$ x", em que X é o quanto
o funcionário ganhou no mês.
*/

const calculaSalario = (horasTrabalhadas, valorHora) => `Salário igual a R$ ${valorHora*horasTrabalhadas}`
console.log(calculaSalario(150, 40.5))