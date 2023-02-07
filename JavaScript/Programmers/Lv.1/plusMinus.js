function solution(absolutes, signs) {
  let result = 0;
  [...absolutes].forEach((item, index) => {
    signs[index] ? (result += item) : (result -= item);
  });
  return result;
}
