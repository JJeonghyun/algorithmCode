function solution(n) {
  if (!(n % 7)) return parseInt(n / 7);
  else return parseInt(n / 7) + 1;
}

console.log(solution(15));
