function solution(before, after) {
    // before랑 after 둘 다 문자열 정렬하고 걍 비교해버림
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}