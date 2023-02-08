function solution(s) {
  let countBinary = 0;
  let countZero = 0;
  while (1) {
    for (let i = 0; i < s.length; i++) {
      if (s[i] == "0") countZero++;
    }
    let tempStr = [...s].map((item) => item.replace("0", "")).join("");
    let tempArr = [];
    let length = tempStr.length;
    while (length > 0) {
      tempArr.push(length % 2);
      length = parseInt(length / 2);
    }
    countBinary++;
    s = tempArr.join("");
    if (s.length === 1 && s[0] === "1") break;
  }
  return [countBinary, countZero];
}
solution("110010101001");
