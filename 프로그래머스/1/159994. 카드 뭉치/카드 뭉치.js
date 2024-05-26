function solution(cards1, cards2, goal) {
    let cards1Index = 0;
    let cards2Index = 0;
    let status = 'Yes'
    
    for(let i = 0 ; i < goal.length ; i++){
        if(goal[i] === cards1[cards1Index]){
            cards1Index++;
            continue;
        }else if (goal[i]=== cards2[cards2Index]){
            cards2Index++;
            continue;
        } else status = 'No'
    }
    return status
    // while(1){
    //     if(!cards1.length && !cards2.length && !goal.length) return 'Yes'
    //     if(goal[0] === cards1[0]){
    //         goal.shift()
    //         cards1.shift()
    //     }else if (goal[0] === cards2[0]){
    //         goal.shift()
    //         cards2.shift()
    //     }else return 'No'
    // }
}