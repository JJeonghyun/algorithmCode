function solution(my_string) {
    return my_string.split("").reduce((result, item)=>{
        if(!isNaN(item * 1))  result += Number(item)
        return result
    },0)
}