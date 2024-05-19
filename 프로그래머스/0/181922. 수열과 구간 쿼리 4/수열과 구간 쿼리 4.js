function solution(arr, queries) {    
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = 0 ; j < queries.length ; j++){
            if(queries[j][0] <= i && i <= queries[j][1] && !(i % queries[j][2])) arr[i] += 1;
        }
    }
    return arr
}