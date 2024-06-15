function solution(binomial) {
    const op = binomial.split(" ")[1];
    switch(op){
        case '+':
            return Number(binomial.split(/[\+\-\*]/)[0]) + Number(binomial.split(/[\+\-\*]/)[1])
        case '-':
            return Number(binomial.split(/[\+\-\*]/)[0]) - Number(binomial.split(/[\+\-\*]/)[1])
        case '*':
            return Number(binomial.split(/[\+\-\*]/)[0]) * Number(binomial.split(/[\+\-\*]/)[1])
    }
}