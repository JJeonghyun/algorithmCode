function solution(left, right) {
  let arr = [];
  let tempArr = [];
  let divisorLength = [];
  let result = 0;
  for (let i = left; i <= right; i++) {
    tempArr = [];
    arr.push(i);
    for (let j = 1; j <= i; j++) {
      if (!(i % j)) tempArr.push(j);
    }
    !(tempArr.length % 2)
      ? divisorLength.push(tempArr.length)
      : divisorLength.push(tempArr.length * -1);
  }
  divisorLength.forEach((item, index) => {
    item > 0 ? (result += arr[index]) : (result -= arr[index]);
  });

  return result;
}

solution(13, 17);
