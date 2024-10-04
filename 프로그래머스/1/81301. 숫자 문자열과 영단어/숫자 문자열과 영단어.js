function solution(s) {
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = s;

    for(let i = 0 ; i < numbers.length ; i++) {
        const arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return +answer;
}
