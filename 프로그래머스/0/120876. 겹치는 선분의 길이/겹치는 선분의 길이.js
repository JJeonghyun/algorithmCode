function solution(lines) {
    let result = 0;
    const overLap = {}
    
    lines.forEach(([start, end])=>{
        for(let i = start ; i < end ; i++){
            if(!overLap[i]) overLap[i] = 1
            else overLap[i]++;
        }
    })
    for(const count in overLap){
        if(overLap[count] > 1) result++;
    }
    return result
}

// function solution(lines) {
//     let result = 0;
//     const overLapList = []
    
//     for (let i = 0; i < lines.length; i++) {
//         for (let j = i + 1; j < lines.length; j++) {
//             const frontStartPoint = lines[i][0];
//             const frontEndPoint = lines[i][1];

//             const backStartPoint = lines[j][0];
//             const backEndPoint = lines[j][1];

//             const overLapStartPoint = Math.max(frontStartPoint, backStartPoint);
//             const overLapEndPoint = Math.min(frontEndPoint, backEndPoint);
            
//             overLapList.push([overLapStartPoint,overLapEndPoint])
//         }
//     }
    
//     let minOverLap = 0
//     let maxOverLap = 0
    
//     overLapList.forEach(([start,end])=>{
//         if(end > start){
//             if(!minOverLap) minOverLap = start 
//             if(!maxOverLap) maxOverLap = end 
//             else {
//                 if(minOverLap > start) minOverLap = start   
//                 if(maxOverLap < end) maxOverLap = end       
//             }
//         }
//     })
//     return maxOverLap - minOverLap
// }