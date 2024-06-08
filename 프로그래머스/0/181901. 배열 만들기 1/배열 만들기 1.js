function solution(n, k) {
    let result = []
    for(let i = 1 ; i < n+1 ; i++){
        if(!(i % k)) result.push(i)
    }
    return result
}