function solution(num_list) {
  return [
    [...num_list].filter((item) => item % 2 === 0).length,
    [...num_list].filter((item) => item % 2 === 1).length,
  ];
}
