function solution(n) {
  let answer = [];

  while (n > 0) {
    answer.push(n % 10);
    n = parseInt(n / 10);
  }
  return answer;
}
