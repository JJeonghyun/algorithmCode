function solution(s) {
    const result = []
    for(let i = 0 ; i < s.length ; i++){
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) result.push(s[i])
    }
    return result.sort((a,b)=>{
        if(a > b) return 1
        else return -1
    }).join('')
}