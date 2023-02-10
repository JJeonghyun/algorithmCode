function solution(n) {
  let answer = 1;
  for (let i = 1; i <= n / 2; i++) {
    let sum = 0;
    let j = i;
    while (sum < n) sum += j++;
    if (sum === n) answer++;
  }
  return answer;
}
