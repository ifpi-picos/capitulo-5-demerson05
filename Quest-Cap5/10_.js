let numero = prompt("Digite um número positivo:");


while (numero === "" || numero === null || Number(numero) <= 0) {
    numero = prompt("Entrada inválida. Digite um número positivo:");
}

numero = Number(numero); 

console.log(`Números pares de 0 até ${numero}:`);


for (let i = 0; i <= numero; i += 2) { 
    console.log(i);
}
