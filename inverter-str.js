const inverterStr = (str) => {
    let chars = [...str];
    let newStr = '';
    while (chars.length > 0) {
        newStr += chars.pop();
    }
    return console.log(newStr);
}

inverterStr('target');