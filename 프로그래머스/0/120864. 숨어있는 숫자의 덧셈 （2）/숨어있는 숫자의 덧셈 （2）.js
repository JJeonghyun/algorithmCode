function solution(my_string) {
    return my_string.split(/[a-zA-Z]/g).reduce((sum, i)=>{
        return sum += Number(i)
    },0)
}