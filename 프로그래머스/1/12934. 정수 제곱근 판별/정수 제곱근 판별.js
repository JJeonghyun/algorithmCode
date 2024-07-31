function solution(n) {
    // 제곱근이면 1로 나눴을 때 나머지가 없을 테니까 조건식을 아래와 같이 판별함
    return Math.sqrt(n) % 1 ? -1 :  (Math.sqrt(n) + 1) ** 2;
}