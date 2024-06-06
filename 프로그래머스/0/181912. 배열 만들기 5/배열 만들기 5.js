function solution(intStrs, k, s, l) {
    return intStrs.map((item)=> +item.slice(s,s+l)).filter((elem)=> elem > k)
}