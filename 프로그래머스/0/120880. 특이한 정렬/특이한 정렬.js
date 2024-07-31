function solution(numlist, n) {
    // 같은 거리에 있으면 큰수(내림차순)를 아니면 오름차순 정렬
    return numlist.sort((a,b)=>  Math.abs(n-a) === Math.abs(n-b) ? b - a : Math.abs(n-a) - Math.abs(n-b))
}