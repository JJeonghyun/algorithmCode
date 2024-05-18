function solution(my_str, n) {
    let result = [];
    let sliceNum = Math.floor(my_str.length / n);
    for(let i = 0 ; i < sliceNum ; i++){
        result.push(my_str.slice(i*n, (i+1) * n))
    }
    if(my_str.length % n) result.push(my_str.slice(sliceNum*n))
    return result;
}