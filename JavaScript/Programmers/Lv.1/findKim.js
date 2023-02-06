function solution(seoul) {
  return `김서방은 ${[...seoul].findIndex((item) =>
    item.includes("Kim")
  )}에 있다`;
}

console.log(solution(["Jane", "Kim"]));
