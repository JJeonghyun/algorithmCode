function solution(arr) {
  while ((arr.length & (arr.length - 1))) {
    arr.push(0);
  }
  return arr;
}