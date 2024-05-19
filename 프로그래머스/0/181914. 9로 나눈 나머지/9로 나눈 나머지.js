function solution(number) {
    return  number.split("").reduce((acc, item)=>{
       acc +=  Number(item)
        return acc;
    },0) %9
}