function Menu() {
    console.log("=== Bem-vindo ao nosso restaurante! ===");
    console.log("Escolha um prato do nosso menu:");
    console.log("1 - Pizza");
    console.log("2 - Hambúrguer");
    console.log("3 - Salada");
    console.log("4 - Macarrão");
}


Menu();


const pratoEscolhido = parseInt(prompt("Digite o número referente ao prato escolhido:"));
let descricao, preco;


switch (pratoEscolhido) {
    case 1:
        descricao = "Pizza de calabresa com queijo e borda recheada.";
        preco = "R$ 35,00";
        break;

    case 2:
        descricao = "Hambúrguer artesanal com carne Angus e queijo cheddar.";
        preco = "R$ 25,00";
        break;

    case 3:
        descricao = "Salada variada com alface, tomate, cenoura e frango grelhado.";
        preco = "R$ 15,00";
        break;

    case 4:
        descricao = "Macarrão à bolonhesa com queijo parmesão ralado.";
        preco = "R$ 20,00";
        break;

    default:
        descricao = "Prato não encontrado. Por favor, escolha uma opção válida.";
        preco = "N/A";
}


console.log("\n=== Detalhes do Pedido ===");
console.log(`Descrição: ${descricao}`);
console.log(`Preço: ${preco}`);
