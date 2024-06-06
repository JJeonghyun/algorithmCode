function solution(strArr) {
    let result = {};
   strArr.forEach((item)=>{
       if(!result[item.length]) result[item.length] = 1;
       else result[item.length] += 1;
   })
    return Math.max(...Object.values(result))
}