function solution(x) {
  let answer = 0;
  let origiNum = x;

  while (x) {
    answer += x % 10;
    x = parseInt(x / 10);
  }
  if (origiNum % answer == 0) return true;
  else return false;
}
