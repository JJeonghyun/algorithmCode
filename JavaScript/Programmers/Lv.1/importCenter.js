function solution(s) {
  return !(s.length % 2)
    ? s[parseInt(s.length / 2) - 1] + s[parseInt(s.length / 2)]
    : s[parseInt(s.length / 2)];
}
console.log(solution("abcde"));
