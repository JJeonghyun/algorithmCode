function solution(n) {
    let result = 1;
    let count = 2;
    while(1){
        result *= count;
        if(result > n) break;
        count++;
    }
    return count-1;
}