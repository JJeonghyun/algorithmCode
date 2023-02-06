function solution(numbers, k) {
  k = (2 * (k - 1)) % numbers.length;
  return numbers[k];
}
