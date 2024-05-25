function solution(s) {
    let arr = s.split(" ")
    let result = 0;
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i] === "Z" || arr[i+1] === "Z") continue
        result += Number(arr[i])
    }
    return result;
}