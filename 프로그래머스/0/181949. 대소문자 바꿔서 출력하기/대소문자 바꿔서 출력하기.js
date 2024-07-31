const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
    console.log(solution(str))
});

