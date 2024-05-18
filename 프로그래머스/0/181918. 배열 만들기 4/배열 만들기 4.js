function solution(arr) {
    let result = [];
    
    let i = 0;
    while(i < arr.length){
        if(!result.length) result.push(arr[i++])
        else {
            if(result[result.length-1] < arr[i]) result.push(arr[i++])
            else result.pop()
        }
    }
    return result;
}