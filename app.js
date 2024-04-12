alert('Seja bem vindo ao jogo!');
let chute;
let numeroSecreto = 5;
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt('Escreva um número de 1 a 10.');
    if (chute == numeroSecreto) {
        alert(`Você acertou o numero ${numeroSecreto} com ${tentativas} tentativas.`);
    } else if (numeroSecreto > chute) {
        alert(`O número secreto é maior que ${chute}`);
    } else {
        alert(`O número secreto é menor que ${chute}`);
    }
    tentativas++;
    }

