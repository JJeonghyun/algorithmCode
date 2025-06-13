function solution(numbers) {
    const answer = [];
    for(let i = 0 ; i < numbers.length ; i++){
        for(let j = i + 1 ; j < numbers.length ; j++){
            const tempSum = numbers[i] + numbers[j];
            const isCheck = answer.some(num => num ===tempSum);
            if(!isCheck) answer.push(tempSum);
        }
    }
    return answer.sort((a,b)=>a-b)
}