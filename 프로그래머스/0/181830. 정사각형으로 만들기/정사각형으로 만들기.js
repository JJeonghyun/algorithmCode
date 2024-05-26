function solution(arr) {
    let row = arr.length
    let column = arr[0].length
    let result = [...arr]
    if(row > column){
        for(let i = 0 ; i < row ; i++){
            for(let j = 0 ; j < row - column ; j++){
                result[i].push(0)
            }
        }
    }else {
        for(let i = row ; i < column ; i++){
            result.push(Array(column).fill(0))
        }
    }
    return result
}