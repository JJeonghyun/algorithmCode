function solution(s, n) {
    const lowerCaseList = "abcdefghijklmnopqrstuvwxyz";
     
    return s.split("").reduce((result, item)=>{
        const isLower = lowerCaseList.includes(item);
        if(item === " ") result += " ";
        else {
            if(isLower){
                [...lowerCaseList].forEach((elem,idx)=>{
               if(elem === item) {
                  result += lowerCaseList[(idx+n) % lowerCaseList.length]
               }
           })
           }else{
                [...lowerCaseList.toUpperCase()].forEach((elem,idx)=>{
                 if(elem === item) {
                    result += lowerCaseList.toUpperCase()[(idx+n) % lowerCaseList.toUpperCase().length]
               }
           })
           }
    }
        return result
    },[])
}