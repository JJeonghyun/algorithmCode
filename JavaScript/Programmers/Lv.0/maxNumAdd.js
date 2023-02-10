function solution(numbers) {
  let sortArr = [];
  sortArr = [...numbers].sort((a, b) => {
    return a - b;
  });

  return sortArr[sortArr.length - 1] * sortArr[sortArr.length - 2];
}
