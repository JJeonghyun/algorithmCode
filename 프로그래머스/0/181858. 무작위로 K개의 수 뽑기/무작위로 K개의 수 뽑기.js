function solution(arr, k) {
    let result = Array.from(new Set([...arr]))
    if(result.length < k){
        let lackNum = k - result.length
        for(let i = 0 ; i < lackNum ; i++){
            result.push(-1)
        }
    }
    return result.slice(0,k)
}