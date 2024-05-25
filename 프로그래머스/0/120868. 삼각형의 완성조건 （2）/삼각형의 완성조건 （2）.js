function solution(sides) {
    let result = 0
    const max = Math.max(...sides)
    const min = Math.min(...sides)
    for(let i = max-min+1 ; i <= max ; i ++) {
        result++
    }
    for(let i = max+1 ; i < max+min ; i ++) {
        result++
    }
    return result
}