function solution(babbling) {
    let result = 0;
    babbling.forEach((item)=>{
        if(!/^(?:(aya|ye|woo|ma)(?!\1))+$/g.test(item)) return;
        result++;
    })
    return result;
}



// function solution(babbling) {
//     return  babbling.map((item)=>item.replace(/(aya|ye|woo|ma)/g, "")).filter((elem)=> elem === "").length
// }