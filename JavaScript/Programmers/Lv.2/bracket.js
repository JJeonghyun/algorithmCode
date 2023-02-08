function solution(s) {
  let tempArr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") tempArr.push(s[i]);
    else {
      if (!tempArr.length) return false;
      else {
        tempArr.pop();
      }
    }
  }
  if (!tempArr.length) return true;
  else return false;
}
