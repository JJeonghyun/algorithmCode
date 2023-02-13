function solution(n) {
  let tempArr = [];
  let result = 0;
  while (n > 0) {
    tempArr.push(n % 3);
    n = parseInt(n / 3);
  }
  let resultArr = tempArr.reverse();
  for (let i = 0; i < resultArr.length; i++) {
    result += resultArr[i] * Math.pow(3, i);
  }
  return result;
}

solution(45);
