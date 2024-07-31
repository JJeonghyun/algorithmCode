function solution(l, r) {
    const result = []
    for(let i = l ; i <= r ; i++){
        const temp = i.toString().split("")
        if(temp.every((item)=> item === "5" ||item === "0")) result.push(i)
    }
    return result.length ? result : [-1]
}