function solution(A, B) {
  let answer = 0;
  let ascArr = [...A].sort((a, b) => {
    return a - b;
  });
  let descArr = [...B].sort((a, b) => {
    return b - a;
  });
  //   for (let i = 0; i < ascArr.length; i++) {
  //     answer += ascArr[i] * descArr[i];
  //   }
  ascArr.forEach((item, index) => {
    answer += item * descArr[index];
  });
  return answer;
}
