function solution(arr) {
  let tempArr = [...arr].sort((a, b) => {
    return a - b;
  });
  return ![...arr].filter((item) => item !== tempArr[0]).length
    ? [-1]
    : [...arr].filter((item) => item !== tempArr[0]);
}
