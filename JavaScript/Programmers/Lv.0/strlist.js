function solution(strlist) {
  let answer = [];
  [...strlist].forEach((item) => {
    answer.push(item.length);
  });
  return answer;
}
