function solution(my_string) {
    const result = [];
    for(let i = 0 ; i < my_string.length ; i++){
        result.push(my_string.slice(i))
    }
    return result.sort((a,b)=>{
        if(a > b) return 1
        else if(a < b) return -1
        else return 0
    })
}