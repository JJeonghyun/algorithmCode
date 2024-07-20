function solution(A, B) {
    let result = 0;
    while(1){
        if(A === B) break;
        if(A.length === result) return -1
        let temp = A[A.length-1];
        for(let i = 0 ; i < A.length - 1 ; i++){
            temp += A[i]
        }
        result++;
        A = temp;
     }
    return result
}