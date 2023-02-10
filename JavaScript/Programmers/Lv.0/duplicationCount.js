function solution(array, n) {
  return ![...array].filter((item) => item === n).length
    ? 0
    : [...array].filter((item) => item === n).length;
}
