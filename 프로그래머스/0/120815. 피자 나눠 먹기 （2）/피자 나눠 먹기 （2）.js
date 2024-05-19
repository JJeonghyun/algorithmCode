function solution(n) {
    let result = 0;
    let i = 1;
    while(1){
        if(!((n * i) % 6)){
            result = (n * i / 6)
            break;
        }else {
            i++;
        }
    }
    return result;
}