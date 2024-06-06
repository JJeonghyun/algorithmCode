function solution(n) {
    let result = []
    while(1){
        result.push(n);
        if(n === 1) break;   
        if(n % 2) n = 3 * n + 1;
        else n /= 2;
    }
    return result
}