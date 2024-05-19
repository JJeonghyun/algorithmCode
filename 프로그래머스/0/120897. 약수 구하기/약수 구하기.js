function solution(n) {
    let result = []
    for(let i = 1 ; i<=n; i++){
        if(!(n % i)) result.push(i)
    }
    return result;
}
