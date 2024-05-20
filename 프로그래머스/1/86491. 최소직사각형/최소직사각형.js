function solution(sizes) {
    let maxX = 0;
    let maxY = 0;
    let sortedArr = [...sizes].map((item)=> item.sort((a,b)=> a-b))
    sortedArr.forEach((size)=>{
        if(!maxX && !maxY) {
            maxX = size[0]
            maxY = size[1]
        }else{
            if(maxX  < size[0]) maxX = size[0]
            if(maxY  < size[1]) maxY = size[1]
        }
    })
    return maxX * maxY
}