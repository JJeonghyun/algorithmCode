function solution(n, numlist) {
    return numlist.filter((item)=> !(item % n))
}