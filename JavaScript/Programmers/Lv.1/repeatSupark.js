function solution(n) {
  return !(n % 2)
    ? "수박".repeat(parseInt(n / 2))
    : "수박".repeat(parseInt(n / 2)) + "수";
}
