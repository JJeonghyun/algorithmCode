function solution(n) {
  let answer = 0;

  if (Math.sqrt(n) % 1 != 0) {
    return -1;
  } else {
    return (Math.sqrt(n) + 1) ** 2;
  }
}
