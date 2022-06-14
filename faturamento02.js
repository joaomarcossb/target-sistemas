let estados = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
};

const faturamento = (lista) => {
    let vals = Object.values(lista);
    let total = vals.reduce((a, b) => a + b, 0);
    let result = {};
    for (let el in lista) {
        if (!result[el]) result[el] = `${(lista[el] / total).toFixed(2) * 100}%`;
    }
    return console.log(result);
}

faturamento(estados);