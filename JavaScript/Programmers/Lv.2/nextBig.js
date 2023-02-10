function solution(n) {
  let originalLength = n
    .toString(2)
    .split("")
    .filter((item) => item == 1).length;
  while (1) {
    let tempNum = ++n;
    let tempLength = tempNum
      .toString(2)
      .split("")
      .filter((item) => item == 1).length;

    if (originalLength === tempLength) return tempNum;
  }
}
solution(78);
