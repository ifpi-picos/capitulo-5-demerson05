function calcularIMC() {
    // Solicita altura e peso do usuário
    const altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75):"));
    const peso = parseFloat(prompt("Digite seu peso em quilogramas (ex: 70):"));

    // Verifica se os valores são válidos
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        console.log("Valores inválidos! Certifique-se de digitar números positivos.");
        return;
    }

    // Calcula o IMC
    const imc = peso / (altura * altura);

    // Classificação do IMC conforme a tabela da OMS
    let classificacao;
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = "Obesidade Grau I";
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III (Obesidade Mórbida)";
    }

    // Exibe o resultado
    console.log("=== Resultado do IMC ===");
    console.log(`Seu IMC é: ${imc.toFixed(2)}`);
    console.log(`Classificação: ${classificacao}`);
}

// Executa a função
calcularIMC();
