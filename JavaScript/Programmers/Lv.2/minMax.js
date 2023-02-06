function solution(s) {
  let tempNum = s
    .split(" ")
    .map((item) => +item)
    .sort((a, b) => {
      return a - b;
    });
  return [tempNum[0], tempNum[tempNum.length - 1]]
    .map((item) => "" + item)
    .join(" ");
}

solution("-1 -2 -3 -4");
