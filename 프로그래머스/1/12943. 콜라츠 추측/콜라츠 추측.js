function solution(num) {
  let answer = 0
  while (true) {
    if (num == 1) return answer
    if (answer >= 500) return -1
    if (!(num % 2)) num /= 2
    else num = num * 3 + 1
    answer++;
  }
}