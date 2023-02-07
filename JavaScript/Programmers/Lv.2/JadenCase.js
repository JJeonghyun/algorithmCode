function solution(s) {
  let answer = "";
  if (isNaN(+s[0])) answer = s[0].toUpperCase();
  else answer += s[0];
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === " ") answer += s[i].toUpperCase();
    else answer += s[i].toLowerCase();
  }
  return answer;
}
solution("3people unFollowed me");
