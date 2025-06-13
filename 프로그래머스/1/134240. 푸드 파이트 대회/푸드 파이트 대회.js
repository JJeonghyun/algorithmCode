function solution(food) {
    let oneSide = '';
    
    for(let i = 1 ; i < food.length ; i++){
        let n = Math.floor(food[i] / 2);
        while(n--) oneSide += i;
    }
    return oneSide + Math.floor(food[0] / 2) + oneSide.split('').reverse().join('')
}