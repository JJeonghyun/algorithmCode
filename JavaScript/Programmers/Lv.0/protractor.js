function solution(angle) {
  //   if (angle < 90 && angle > 0) {
  //     return 1;
  //   } else if (angle === 90) {
  //     return 2;
  //   } else if (angle < 180 && angle > 90) {
  //     return 3;
  //   } else {
  //     return 4;
  //   }

  return angle < 90 && angle > 0
    ? 1
    : angle === 90
    ? 2
    : angle < 180 && angle > 90
    ? 3
    : 4;
}
