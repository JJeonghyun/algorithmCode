function solution(n) {
    let result  = [] 
    for(let i = 0 ; i < n ; i++){
        result.push(Array(n).fill(0))
    }
    result.forEach((item,index)=>{
        item.forEach((_,idx)=>{
            if(index === idx) item[idx] = 1;
        })
    })
    return result;
}
