/* Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.*/

const faturamentoMensalPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  };
  
  const totalMensal = Object.values(faturamentoMensalPorEstado).reduce((acc, val) => acc + val, 0);
  
  const percentuaisPorEstado = {};
  
  for (let estado in faturamentoMensalPorEstado) {
    const faturamentoEstado = faturamentoMensalPorEstado[estado];
    const percentual = (faturamentoEstado / totalMensal) * 100;
    percentuaisPorEstado[estado] = percentual.toFixed(2);
  }
  
  console.log("Percentual de representação do faturamento mensal por estado:");
  console.log(percentuaisPorEstado);
  
  
  
  