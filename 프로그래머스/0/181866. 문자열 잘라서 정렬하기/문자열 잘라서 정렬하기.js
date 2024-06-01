function solution(myString) {
    return myString.split("x").sort((a,b)=>{
        if(a > b) return 1
        if(b > a) return -1
        return 0
    }).filter((elem)=> elem !== '')
}