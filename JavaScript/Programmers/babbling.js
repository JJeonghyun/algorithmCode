function solution(babbling) {
  let answer = 0;
  let resultArr = [];
  for (let i = 0; i < babbling.length; i++) {
    if (babbling[i].match(/(ayaaya|yeye|woowoo|mama)/)) continue;
    resultArr.push(babbling[i].replace(/(aya|ye|woo|ma)/g, ""));
  }
  answer += resultArr.filter((item) => item == "").length;
  return answer;
}
