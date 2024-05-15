function solution(my_string, overwrite_string, s) {
    return [...my_string.split("").slice(0,s),...overwrite_string,...my_string.split("").slice(s+overwrite_string.length)].join("")
}