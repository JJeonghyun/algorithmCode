function solution(sides) {
  let sortArr = [];
  sortArr = sides.sort((a, b) => {
    return a - b;
  });
  if (sortArr[0] + sortArr[1] <= sortArr[2]) return 2;
  else return 1;
}
