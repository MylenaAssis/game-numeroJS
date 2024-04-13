alert('Seja bem vindo ao jogo!');
let chute;
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt('Escreva um número de 1 a 100.');
    if (chute == numeroSecreto) {
        break;
    } else {
        if (numeroSecreto > chute) {
        alert(`O número secreto é maior que ${chute}`);
        } else {
        alert(`O número secreto é menor que ${chute}`);
        }
    tentativas++;
    }
}

//operador ternario
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou o numero ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
