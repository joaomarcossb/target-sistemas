// Algoritmo que cria um objecto similar ao JSON:
let json = {};
for (let i=1; i<=30; i++) {
    if (!json[i]) json[i] = Math.floor(Math.random() * (5000 - 1000) + 1000);
}

// Função que retorna os dados requisitados:
const faturamento = (data) => {
    let vals = [];
    for (let el in data) vals.push(Number(data[el]));
    let min = Math.min(...vals);
    let max = Math.max(...vals);
    let avr = vals.reduce((a, b) => a + b, 0) / vals.length;
    let sup = vals.filter(n => n > avr);
    return console.log(`O menor valor do faturamento foi ${min}. O maior foi: ${max} e o número de dias que superaram a média mensal foram: ${sup.length}.`);
}

// Chamada da função passando o objeto (pseudo-json):
faturamento(json);