function solution(num, k) {
    let result = num.toString().split("").findIndex((item)=> item == k) 
    return result > -1 ? result + 1  : -1
}