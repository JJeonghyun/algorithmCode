function solution(arr, flag) {
    const result = [];
    
    flag.forEach((item,index)=>{
        if(!item) {
            for(let i = 0 ; i < arr[index] ; i++){
                result.pop()
            }
        }
        else{
            for(let i = 0 ; i < arr[index] * 2 ; i++){
                result.push(arr[index])
            }
        }
    })
    return result
}