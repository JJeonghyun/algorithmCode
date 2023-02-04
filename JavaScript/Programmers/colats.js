function solution(num) {
  let answer = 0;
  while (true) {
    if (num == 1) return answer;
    if (answer >= 500) return -1;
    if (num % 2 == 0) {
      num /= 2;
      answer++;
    } else if (num % 2 == 1) {
      num = num * 3 + 1;
      answer++;
    }
  }
}
