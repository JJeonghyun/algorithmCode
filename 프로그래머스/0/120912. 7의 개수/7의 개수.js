function solution(arr) {
    let count = 0;
    arr.join("").split("").forEach((item)=>{
        if(item === "7") count++;
    })
    return count;
}