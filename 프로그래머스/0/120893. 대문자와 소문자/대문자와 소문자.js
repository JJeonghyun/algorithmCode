function solution(my_string) {
    return my_string.replace(/./g, (item)=> item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase())}