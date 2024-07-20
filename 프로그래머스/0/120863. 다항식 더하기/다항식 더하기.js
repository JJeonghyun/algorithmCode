function solution(polynomial) {
    const seperate = polynomial.split(' + ')
    const xHang = seperate.filter((item)=> item.includes('x'))
    const numberHang = seperate.filter((item)=> !item.includes('x'))
    
    const calcX = xHang.reduce((acc, item)=>{
       if(!item.replace('x', '')) acc += 1
        else acc += Number(item.replace('x',''))
        return acc
    },0)
    
    const calcRest = numberHang.reduce((acc, item)=>{
       return acc += Number(item)
    },0)
    
    if(!calcX) return calcRest.toString()
    if(!calcRest) return (calcX === 1 ? '' : calcX)  + 'x'
    
    return (calcX === 1 ? '' : calcX) + 'x' + ' + ' + calcRest
    

}