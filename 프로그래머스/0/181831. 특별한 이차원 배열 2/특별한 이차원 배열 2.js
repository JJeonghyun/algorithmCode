function solution(arr) {
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = i ; j < arr[i].length ; j++){
            if(arr[i][j] !== arr[j][i]) return 0
        }
    }
    return 1
}