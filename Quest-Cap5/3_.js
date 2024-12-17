let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));

const media = (nota1 + nota2 + nota3)/3

if(media >= 7){
    console.log(`Média ${media}, aprovado!`)
}else{
    console.log(`Média ${media}, reprovado!`)
}


