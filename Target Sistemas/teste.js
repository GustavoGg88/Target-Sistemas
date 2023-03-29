/* Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

function fibonacci(numero) {
    let fib = [0, 1]; // Sequência de Fibonacci inicial
    while (fib[fib.length - 1] < numero) { // Continua a sequência até encontrar um número maior ou igual ao número informado
      fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    if (fib.includes(numero)) {
      mensagem = `O número ${numero} pertence à sequência de Fibonacci: ${fib}`;
    } else {
      mensagem = `O número ${numero} não pertence à sequência de Fibonacci até ${fib[fib.length - 1]}. A sequência é ${fib}`;
    }
    return mensagem;
  }
  
  // Exemplo de uso da função
  console.log(fibonacci(13));



