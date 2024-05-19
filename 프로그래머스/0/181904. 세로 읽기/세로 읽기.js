function solution(my_string, m, c) {
    let result = []
    for(let i = 0 ; i< my_string.length ; i++){
        result.push(my_string[m * i + c-1])
    }
    return result.join("")
}