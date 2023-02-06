function solution(a, b) {
  let answer = 0;
  if (a == b) return a || b;
  if (a > b) return solution(b, a);
  for (let i = a; i < b + 1; i++) {
    answer += i;
  }
  return answer;
}
