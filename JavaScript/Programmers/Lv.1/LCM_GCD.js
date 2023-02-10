function solution(n, m) {
  let tempArr = [];
  let answer = [];
  for (let i = 1; i < Math.max(n, m); i++) {
    if (!(n % i) && !(m % i)) tempArr.push(i);
  }
  answer.push(tempArr[tempArr.length - 1]);
  if (!(Math.max(n, m) % Math.min(n, m))) answer.push(Math.max(n, m));
  else {
    answer.push((n * m) / tempArr[tempArr.length - 1]);
  }

  return answer;
}
console.log(solution(4, 10));
