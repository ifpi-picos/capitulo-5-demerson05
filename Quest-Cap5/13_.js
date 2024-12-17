const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
const maxTentativas = 10;

function jogar() {
    while (tentativas < maxTentativas) {

        let palpite = prompt("Adivinhe o número entre 1 e 100:");

        palpite = parseInt(palpite);


        if (isNaN(palpite)) {
            alert("Por favor, digite um número válido.");
            continue;
        }


        tentativas++;


        if (palpite === numeroSecreto) {
            alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativas.`);
            break;
        } else if (palpite < numeroSecreto) {
            alert("O número secreto é maior. Tente novamente!");
        } else {
            alert("O número secreto é menor. Tente novamente!");
        }

        if (tentativas === maxTentativas) {
            alert(`Você não conseguiu adivinhar o número. O número secreto era ${numeroSecreto}.`);
        }
    }
}

jogar();
