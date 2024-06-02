function solution(cipher, code) {
    return cipher.split("").map((item,index)=>{
        if(!((index + 1) % code)) return item
    }).join("")
}