/*Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.*/


const faturamentoDiario = [100, 250, 175, 300, 450, 200, 225, 175, 150, 375, 325, 250, 200, 150, 400, 325, 300, 175, 225, 350, 250, 200, 375, 325, 400, 200, 250, 300, 175, 225];

// Maior valor de faturamento
const maxFaturamento = Math.max(...faturamentoDiario);

// Menor valor de faturamento
const minFaturamento = Math.min(...faturamentoDiario);

// Média mensal de faturamento
const mediaFaturamento = faturamentoDiario.reduce((acc, val) => acc + val, 0) / faturamentoDiario.length;

// Número de dias em que o faturamento foi superior à média mensal
const diasAcimaMedia = faturamentoDiario.filter(faturamento => faturamento > mediaFaturamento).length;

// Exibindo os resultados
console.log(`O maior valor de faturamento ocorrido em um dia do mês foi ${maxFaturamento}.`);
console.log(`O menor valor de faturamento ocorrido em um dia do mês foi ${minFaturamento}.`);
console.log(`${diasAcimaMedia} dias no mês tiveram um faturamento superior à média mensal de ${mediaFaturamento}.`);