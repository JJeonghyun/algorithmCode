function solution(quiz) {
    const result = []
    quiz.forEach((item)=>{
        const temp = item.split(' ')
        if(temp[1] === '-'){
            if(Number(temp[0]) - Number(temp[2]) === Number(temp[temp.length-1])) result.push('O')
            else result.push('X')
        }else{
            if(Number(temp[0]) + Number(temp[2]) === Number(temp[temp.length-1])) result.push('O')
            else result.push('X')
        }
    })
    return result
}