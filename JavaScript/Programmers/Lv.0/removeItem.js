function solution(my_string, letter) {
  return my_string
    .split("")
    .filter((item) => item !== letter)
    .join("");
}
