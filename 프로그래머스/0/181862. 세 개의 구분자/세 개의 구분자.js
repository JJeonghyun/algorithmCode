function solution(myStr) {
    return !myStr.split(/a|b|c/).filter((item)=> item !== "").length ? ['EMPTY'] : myStr.split(/a|b|c/).filter((item)=> item !== "")
}