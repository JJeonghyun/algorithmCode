function solution(order) {
    return order.toString().split("").reduce((acc, item)=>{
        if (Number(item) % 3 === 0 && item !== '0') acc++; 
        return acc;
    },0);
}