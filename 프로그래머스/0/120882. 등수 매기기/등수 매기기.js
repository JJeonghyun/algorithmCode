function solution(score) {
    const avg = score.map((item)=> (item[0] + item[1]) / 2)
    
    const sort = [...avg].sort((a,b)=> b-a)
    
    return avg.map((elem)=> sort.indexOf(elem)+1)
}