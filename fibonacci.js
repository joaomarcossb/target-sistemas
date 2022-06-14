const fibonacci = (num) => {
    let curr = 0, next = 1, sum = 0;
    while (sum < num) {
        sum = curr + next;
        curr = next;
        next = sum;
    }
    return console.log(
        num === sum 
        ? `O número ${num} pertence à sequência.` 
        : `O número ${num} não pertence à sequência.`
    );
}

fibonacci(21); // 0, 1, 1, 2, 3, 5, 8, 13, 21...