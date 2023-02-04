let answer = [];
function towerHanoi(n, start, mid, end) {
  if (n === 1) {
    answer.push([start, end]);
  } else {
    towerHanoi(n - 1, start, end, mid);
    answer.push([start, end]);
    towerHanoi(n - 1, mid, start, end);
  }
}
function solution(n) {
  towerHanoi(n, 1, 2, 3);
  return answer;
}
