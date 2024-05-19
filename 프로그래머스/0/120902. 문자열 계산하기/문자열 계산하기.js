function solution(my_string) {
    const sliceArr = my_string.split(" ");
    let result = Number(sliceArr[0]); 

    for (let i = 1; i < sliceArr.length; i += 2) {
        const op = sliceArr[i];
        const target = Number(sliceArr[i + 1]); 

        if (op === "+") {
            result += target;
        } else {
            result -= target;
        }
    }

    return result;
}