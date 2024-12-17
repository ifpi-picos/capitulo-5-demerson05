const temp = parseFloat(prompt("Digite a temperatura:"));
const opcao = prompt("Converter para (C)elsius ou (F)ahrenheit?").toUpperCase();

if (opcao === 'C') {
    const convertido = (temp - 32) * 5 / 9;
    alert(`${temp}°F é igual a ${convertido.toFixed(2)}°C.`);
} else if (opcao === 'F') {
    const convertido = (temp * 9 / 5) + 32;
    alert(`${temp}°C é igual a ${convertido.toFixed(2)}°F.`);
} else {
    alert("Opção inválida.");
}
