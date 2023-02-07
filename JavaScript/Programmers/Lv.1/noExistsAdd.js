function solution(numbers) {
  let tempArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let totalAdd = 0;
  let answer = 0;
  tempArr.forEach((item) => {
    totalAdd += item;
  });
  [...numbers].forEach((elem) => {
    answer += elem;
  });
  return totalAdd - answer;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
