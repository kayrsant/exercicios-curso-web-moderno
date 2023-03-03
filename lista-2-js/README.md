#  Exercícios de desafio do Curso Web Moderno Completo com JavaScript 2022 + Projetos

## Seção 10

### Exercícios

1. Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para afunção) e com ponto de exclamação "!" no final.

2. Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
    > Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e desconsidere também dias decorridos desde o último aniversário.

3. Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por umfuncionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$ "x", em que X é o quanto o funcionário ganhou no mês.

4. Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2º mês.

5. Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

6. Escreva uma função que recebe um valor booleano ou número. Se o parâmetro for booleano, o retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro fornumérico, o retorno será o número inverso. Por exemplo, se for fornecido1, o retorno será -1. Se o parâmetro de entrada não for nenhum dos tipos acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ...".

7. Crie uma função que recebe quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se o parâmetro número está entre minimo e máximo. Quando o parâmetro inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se o número é igual a minimo ou máximo. Caso o parâmetro inclusivo não seja informado, seuvalor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se número é igual a minimo ou máximo.

8. Desenvolva uma função que recebe dois números inteiros não negativose realize a multiplicação deles. Porém, não utilize o operador *.

9. Escreva uma função que receba dois parâmetros.O primeiro parâmetro é o elemento que repetirá, enquanto o segundo será o número de vezes que haverá repetição. Um array será retornado.

10. Elabore uma função que recebe um número comoparâmetro e retorne uma string com o símbolo "+" na quantidade especificada no parâmetro.

11. Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array.

12. Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a mesma. Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam cópias de objetos e manipulem os dados dessa cópias, com o intuito de evitar efeitos indesejáveis em algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
    > Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade especificada no segundo parâmetro.

13. Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro.

14. Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto.

15. Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares.

16. A fim de manter o calendário anual ajustado com o movimento da translação da Terra, criou-se os anos bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais. Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100, exceto se for também múltiplo de 400. Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele é bissexto ou não.

17. Escreva uma função que receba um array de números e retorne a `soma` de todos.

18. Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal, dessa aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está desenvolvendo no momento é a de somar o total de despesas. Crie uma função que receba um array de produtos e retorne o total de despesas.

19. Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento, pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário. Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade indeterminada de números e retorne a média simples desses números.

20. Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão deverá ser de duas casas decimais, arredondando se necessário.

21. Crie uma função que receba um array de números e retorne o menor número desse array.

22. Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado internamente. Se o valor fornecido foi o sorteado, retorne `Parabéns! O número sorteado foi o X`. Se não for igual, retorne `Que pena! O número sorteado foi o X`. X é o número que foi sorteado.

23. Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela

24. Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas.

25. Afim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para identificar palavras semelhantes. 
    > Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.

26. Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as consoantes, ou seja, sem as vogais.

27. Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas.

28. Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que têm a quantidade de dígitos indicada pelo segundo parâmetro.

29. Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.

30. Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão num array. Você deverá calcular a média da nota de cada aluno e retornar um objeto com os atributos `nome` e `media`, que indica o aluno que teve o melhor desempenho nas notas.