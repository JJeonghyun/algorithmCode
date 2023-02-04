function solution(n) {
  let result = [0, 1];
  let sumNum = 0;

  for (let i = 0; i <= n; i++) {
    if (i >= 2) {
      sumNum = result[i - 2] + result[i - 1];
      result.push(sumNum % 1234567);
    }
  }

  return result[n];
}
