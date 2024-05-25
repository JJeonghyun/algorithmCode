function solution(my_string) {
    return Array.from(new Set(my_string.split(""))).join("")
}