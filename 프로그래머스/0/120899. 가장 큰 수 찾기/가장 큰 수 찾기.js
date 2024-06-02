function solution(array) {
    return [Math.max(...array), array.findIndex((item)=> item === Math.max(...array))]
}