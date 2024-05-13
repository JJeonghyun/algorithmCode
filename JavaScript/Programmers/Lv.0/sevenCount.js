function solution(arr) {
    let count = 0;
    arr.join("").split("").forEach((item)=>{
        if(item === "7") count++;
    })
    return count;
}

// function solution(arr) {
//     let count = 0 ;
//     arr.forEach((item)=>{
//         item += ""
//         item.split("").forEach((elem)=>{
//             if(elem === "7") count++;
//         })
//     })
//     return count;
// }

solution([7,17,77])