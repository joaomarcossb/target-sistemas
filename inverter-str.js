const inverterStr = (str) => {
    let letras = [...str];
    let novaStr = '';
    while (letras.length > 0) {
        novaStr += letras.pop();
    };
    return novaStr;
}

console.log(inverterStr('target'));