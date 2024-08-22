function solution(arr) {
  return arr.filter((item, index) => item !== arr[index + 1]);
}
