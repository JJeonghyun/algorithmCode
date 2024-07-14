function solution(rank, attendance) {
    const rankList = rank.filter((item,index)=> attendance[index]).sort((a,b)=> a-b)
    
    const indexList = []
    for(let i = 0 ; i < rankList.length ; i++){
        for(let j = 0 ; j < rank.length ; j++){
            if(rankList[i] === rank[j]) indexList.push(j)
        }
    }
    
return 10000 * indexList[0] + 100 * indexList[1] + indexList[2]
}