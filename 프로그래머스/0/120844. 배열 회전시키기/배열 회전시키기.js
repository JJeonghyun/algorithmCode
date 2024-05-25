function solution(numbers, direction) {
    let result = []
    if(direction === "left"){
        for(let i = 1 ; i < numbers.length ; i++){
            result.push(numbers[i])
        }
        result.push(numbers[0])
    }else{
        result.push(numbers[numbers.length-1])
         for(let i = 0 ; i < numbers.length-1 ; i++){
            result.push(numbers[i])
        }
    }
    return result
}