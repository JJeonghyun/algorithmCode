function solution(i, j, k) {
    let result = 0;
    while(i <= j){
        i.toString().split("").forEach((item)=>{
            if(item.includes(k)) result++
        })
        i++
    }
    return result
}