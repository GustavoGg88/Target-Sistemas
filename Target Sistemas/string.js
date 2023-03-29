//Escreva um programa que inverta os caracteres de um string


let str = "Olá Target Sistemas";
let strInvertida = "";

for (let i = str.length - 1; i >= 0; i--) {
  strInvertida += str[i];
}

console.log(strInvertida);