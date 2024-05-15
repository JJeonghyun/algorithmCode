function solution(picture, k) {
    let result = []
  picture.forEach(((item)=>{
        for(let i = 0; i<k; i++){
            result.push(item.split("").map((elem)=> elem.repeat(k)).join(""));
        }
    }))
  return result;
 }