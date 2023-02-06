function solution(money) {
  let answer = [];
  answer.push(parseInt(money / 5500), parseInt(money % 5500));
  return answer;
}
