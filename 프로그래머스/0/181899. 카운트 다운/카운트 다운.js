function solution(start, end_num) {
    let result = []
    for(let i = start ; i > end_num -1 ; i--){
        result.push(i)
    }
    return result
}