const checkParallel = (point1, point2)=>{
    const xChange = Math.abs(point2[0] - point1[0])
    const yChange = Math.abs(point2[1] - point1[1])
    
    return yChange / xChange
}

function solution(dots) {
    const case1 = checkParallel(dots[0], dots[1]) === checkParallel(dots[2], dots[3])
    const case2 = checkParallel(dots[0], dots[2]) === checkParallel(dots[1], dots[3])
    const case3 = checkParallel(dots[0], dots[3]) === checkParallel(dots[1], dots[2])
    
    return case1 || case2 || case3 ? 1  : 0
}