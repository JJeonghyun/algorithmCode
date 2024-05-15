function solution(d, budget) {
  let result = 0;
  let counting = 0;

  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    result += d[i];
    if (result > budget) break;
    counting++;
  }
  return counting;
}
