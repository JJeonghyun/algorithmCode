function solution(age) {
    const lowerList = 'abcdefghijklmnopqrstuvwxyz'
    
    return age.toString().split("").reduce((result, item)=>{
        result += lowerList[item]
        return result;
    }, "")
}