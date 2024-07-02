const countToOne = (num)=>{
    let count = 1;
    while(1){
        if(num === 1) break;
        count++;
        num--;
    }
    return count
}

function solution(M, N) {
    const horizontal = countToOne(M)
    const vertical = countToOne(N)
    
    return (horizontal - 1) + horizontal * (vertical-1)
}