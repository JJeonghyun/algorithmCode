const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 왜 형식이 이따구 인지는 모르겠지만
// 전체 문자열을 반복하면서
// 대문자로 바꾼거랑 안바꾼거랑 똑같으면 걔는 대문자라는 소리니까 소문자로 바꾸고
// 아니면 대문자로 바꿈
function solution(str) {
    let result = '';
    for (let i = 0 ; i < str.length ; i++) {
        if (str[i] === str[i].toUpperCase()) result += str[i].toLowerCase();
        else result += str[i].toUpperCase();
    }
    return result;
}

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const str = input[0];
    // 이상하게 콘솔찍어야 성공함;;
    console.log(solution(str))
});

