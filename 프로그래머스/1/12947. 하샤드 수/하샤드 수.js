function solution(x) {
    let answer = 0;
    let originNum = x;

    while (x) {
        answer += x % 10;
        x = parseInt(x / 10);
    }
    return !(originNum % answer)
}