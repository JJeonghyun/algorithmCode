function solution(arr) {
    const min = Math.min(...arr)
    return !arr.filter((item) => item !== min).length ? [-1] : arr.filter((item) => item !== min)
}
