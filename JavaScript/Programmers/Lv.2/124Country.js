function solution(n) {
  let answer = "";
  let numArr = ["4", "1", "2"];
  while (n > 0) {
    if (n % 3 == 0) {
      n = parseInt(n / 3) - 1;
      answer += numArr[0];
    } else if (n % 3 == 1) {
      n = parseInt(n / 3);
      answer += numArr[1];
    } else if (n % 3 == 2) {
      n = parseInt(n / 3);
      answer += numArr[2];
    }
  }
  return answer.split("").reverse().join("");
}
