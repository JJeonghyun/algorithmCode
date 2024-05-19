function solution(dots) {
    let minX = dots[0][0]
    let minY = dots[0][1]
    let maxX = minX
    let maxY = minY
    dots.forEach((item)=>{
        if(item[0] > maxX) maxX = item[0]
        if(item[1] > maxY) maxY = item[1]
        if(item[0] < minX) minX = item[0]
        if(item[1] < minY) minY = item[1]
    })
    return (maxX - minX) * (maxY - minY)
}