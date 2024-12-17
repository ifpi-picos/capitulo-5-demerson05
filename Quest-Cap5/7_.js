function classificarTriangulo() {
    const lado1 = parseFloat(prompt("Digite o primeiro lado:"));
    const lado2 = parseFloat(prompt("Digite o segundo lado:"));
    const lado3 = parseFloat(prompt("Digite o terceiro lado:"));

    // Verifica se os valores formam um triângulo válido
    const ehValido = lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1;

    if (!ehValido || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        console.log("Os valores não formam um triângulo válido.");
    } if (lado1 === lado2 && lado2 === lado3) {
        console.log("Triângulo Equilátero: todos os lados são iguais.");
    } if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("Triângulo Isósceles: dois lados são iguais.");
    } else {
        console.log("Triângulo Escaleno: todos os lados são diferentes.");
    }
}

classificarTriangulo();
