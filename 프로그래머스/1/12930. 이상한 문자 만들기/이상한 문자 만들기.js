function solution(s) {
  return s.split(" ").map((item) =>item.split("").map((elem, idx) => !(idx % 2) ? elem.toUpperCase() : elem.toLowerCase()).join("")).join(" ");
}