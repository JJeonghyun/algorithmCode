function solution(a, b) {
    let aArr= a.split("").reverse()
    let bArr= b.split("").reverse()
    
    let overTen = 0;
    
    let result = [];
    
    for(let i = 0 ; i< Math.max(aArr.length, bArr.length); i++){
        let sum = Number(aArr[i]|| 0) + Number(bArr[i] || 0)
        if(overTen) sum +=1;
        
        if(sum >= 10) {
            overTen = 1;
            if((i !== Math.max(aArr.length, bArr.length) -1)) sum -= 10;
        } else overTen = 0;
        
        result.unshift(sum)
    }
    return result.join("");
}