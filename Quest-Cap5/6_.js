const num1 = Number(prompt("Digite o primeiro número:"));
const num2 = Number(prompt("Digite o segundo número:"));

if (num1 % num2 === 0 || num2 % num1 === 0) {
    console.log("Sim, pelo menos um número é múltiplo do outro.");
} else {
    console.log("Não, nenhum número é múltiplo do outro.");
}
