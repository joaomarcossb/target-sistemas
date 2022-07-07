const fibonacci = (numero) => {
    let atual = 0, proximo = 1, soma = 0;
    while (soma < numero) {
        soma = atual + proximo;
        atual = proximo;
        proximo = soma;
    };
    return numero == soma 
    ? `O número ${numero} pertence à sequência.` 
    : `O número ${numero} não pertence à sequência.`;
};

console.log(fibonacci(21));