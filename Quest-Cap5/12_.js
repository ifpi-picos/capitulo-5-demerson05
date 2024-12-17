let numero = prompt("Digite um número inteiro não-negativo:");


while (numero === "" || numero === null || parseInt(numero) != numero || numero < 0) {
    numero = prompt("Entrada inválida. Digite um número inteiro não-negativo:");
}

numero = parseInt(numero); 

function calcularFatorial(n) {
    let fatorial = 1;
    for (let i = 1; i <= n; i++) {
        fatorial *= i; 
    }
    return fatorial;
}

let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é: ${resultado}`);
