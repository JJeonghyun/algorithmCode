const unLuckCase = (lotto, list)=>{
    let equalNum = 0;
    list.forEach((item)=>{
        lotto.forEach((elem)=>{
            if(elem === item) equalNum++;
            
        })
    })
    return equalNum;
}

const setRank = (score)=>{
    switch(score){
        case 6:
            return 1
        case 5:
            return 2
        case 4:
            return 3
        case 3:
            return 4
        case 2:
            return 5
        default:
            return 6
    }
}

function solution(lottos, win_nums) {
    
     let zeroLength = [...lottos].filter((item)=> !item).length
     
     const worstCase = setRank(unLuckCase(lottos, win_nums))
     const bestCase = setRank(unLuckCase(lottos, win_nums) + zeroLength)
    
    return [bestCase, worstCase]
}

// const unLuckCase = (lotto, list)=>{
//     let equalNum = 0;
//     list.forEach((item)=>{
//         lotto.forEach((elem)=>{
//             if(elem === item) equalNum++;
            
//         })
//     })
//     return equalNum;
// }
// const luckCase = (lotto, list) => {
//     const sortList = [...list].sort((a,b) => a - b)
//     const sortLotto = [...lotto].sort((a,b) => a - b)
    
//     let zeroLength = [...lotto].filter((item)=> !item).length
    
//     while(1){
//         if(zeroLength < 0) break;
//         sortLotto[zeroLength] = sortList[zeroLength]
//         zeroLength--;
//     }
//     return unLuckCase(sortLotto, sortList)
    
// }

// const setRank = (score)=>{
//     switch(score){
//         case 6:
//             return 1
//         case 5:
//             return 2
//         case 4:
//             return 3
//         case 3:
//             return 4
//         case 2:
//             return 5
//         default:
//             return 6
//     }
// }

// function solution(lottos, win_nums) {
//     return [setRank(luckCase(lottos, win_nums)),setRank(unLuckCase(lottos, win_nums))]
// }