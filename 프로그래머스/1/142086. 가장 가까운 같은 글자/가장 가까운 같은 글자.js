function solution(s) {
    let result = [-1]
    for(let i = 1 ; i < s.length ; i++){
        if(s.slice(0,i).lastIndexOf(s[i]) > -1) result.push(i - s.slice(0,i).lastIndexOf(s[i]))
        else result.push(-1)
    }
    return result
}