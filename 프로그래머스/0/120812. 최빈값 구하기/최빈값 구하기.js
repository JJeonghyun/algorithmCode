function solution(array) {
    let tempObj = {}
    array.forEach((item)=>{
       tempObj[item] = (tempObj[item] || 0) + 1
    })
    const max = Math.max(...Object.values(tempObj))
    
    const check = Object.values(tempObj).filter((item)=> item === max)
    if(check.length > 1) return -1
    else return Number(Object.keys(tempObj).find(key => tempObj[key] === max))
    
}
