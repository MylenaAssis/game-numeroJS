alert('Seja bem vindo ao jogo!');
let numeroMaximo = 5;
let chute;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let tentativas = 1;

console.log(numeroMaximo);
console.log(numeroSecreto);

while (chute != numeroSecreto){
    chute = prompt(`Escreva um número de 1 a ${numeroMaximo}.`);
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
