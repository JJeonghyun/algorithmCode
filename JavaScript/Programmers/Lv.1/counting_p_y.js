function solution(s) {
  return !s
    .split("")
    .reduce(
      (prev, curr) =>
        curr === "p" || curr === "P"
          ? prev + 1
          : curr === "y" || curr === "Y"
          ? prev - 1
          : prev,
      0
    );
}
