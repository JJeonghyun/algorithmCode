function solution(price, money, count) {
  let tempResult = 0;
  for (let i = 1; i <= count; i++) {
    tempResult += price * i;
  }
  if (tempResult > money) return tempResult - money;
  else return 0;
}
