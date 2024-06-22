// n+0 n+1 n+2 = 12 | 3n+3 =12 | 3n=9 | n = 3
// n+0 n+1 n+2 n+3 = 14 | 4n+6 = 14 | 4n = 8 | n = 2
function solution(num, total) {
    const result = []
    let n = 0;
    let temp = 0;
    while(1){
        if(n === num) break;
        temp += n;
        n++;
    }
    total -= temp;
    n = total / num;
    for(let i = 0 ; i < num ; i++){
        result.push(n+i)
    }
    return result;
}