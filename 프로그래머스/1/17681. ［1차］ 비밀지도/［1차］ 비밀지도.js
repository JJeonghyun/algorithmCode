function solution(n, arr1, arr2) {
  let tempArr = [];
  for (let i = 0; i < n; i++) {
    tempArr.push(arr1[i] | arr2[i]);
  }
  tempArr = tempArr.map((item) =>
    item.toString(2).replace(/1/g, "#").replace(/0/g, " ")
  );
  for (let i = 0; i < tempArr.length; i++) {
    if (n - tempArr[i].length !== 0)
      tempArr[i] = " ".repeat(n - tempArr[i].length) + tempArr[i];
  }
  return tempArr;
}