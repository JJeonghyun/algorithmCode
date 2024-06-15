function solution(my_string, indices) {
    const splitStr = my_string.split("")
    indices.forEach((item)=>{
        splitStr[item] = ""
    })
    return splitStr.join("")
}