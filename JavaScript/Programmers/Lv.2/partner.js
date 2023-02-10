function solution(s) {
  let answer = [];
  let tempStr = s.split("");
  for (let i = 0; i < tempStr.length; i++) {
    if (answer[answer.length - 1] === s[i]) {
      answer.pop();
      continue;
    }
    answer.push(s[i]);
  }
  return !answer.length ? 1 : 0;
}
