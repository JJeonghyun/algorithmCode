function solution(numbers) {
  return [...numbers].reduce((prev, curr) => prev + curr, 0) / numbers.length;
}
