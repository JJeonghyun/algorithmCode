function solution(slice, n) {
  if (n % slice) return parseInt(n / slice) + 1;
  else return parseInt(n / slice);
}
