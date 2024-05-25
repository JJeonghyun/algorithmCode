function solution(emergency) {
    let indexArr = [...emergency].sort((a,b)=>b-a)
    let result =[]
    
    for(let i = 0 ; i < emergency.length ; i++){
        result.push(indexArr.findIndex((item)=> item === emergency[i]) + 1)
    }
    return result 
}