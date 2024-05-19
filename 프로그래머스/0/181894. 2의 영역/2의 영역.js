function solution(arr) {
    return arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1).length ? arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1) : [-1]
}