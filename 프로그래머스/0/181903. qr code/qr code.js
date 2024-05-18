function solution(q, r, code) {
    return code.split("").filter((item,index)=>{
            if(index % q === r) return item
    }).join("");
}