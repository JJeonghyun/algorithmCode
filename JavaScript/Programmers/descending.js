function solution(n) {
  let answer = 0;

  answer = +n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");

  return answer;
}
