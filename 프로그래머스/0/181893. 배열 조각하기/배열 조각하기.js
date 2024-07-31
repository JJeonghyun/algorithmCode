function solution(arr, query) {
    // 홀수 인덱스는 query의 원소기준 앞부분을 날리고
    // 짝수 인덱스는 query의 원소기준 뒷부분을 날린다
    query.forEach((item,index)=>{
        if(index % 2) arr = arr.slice(item)
        else arr = arr.slice(0,item+1)
    })
    return arr
}