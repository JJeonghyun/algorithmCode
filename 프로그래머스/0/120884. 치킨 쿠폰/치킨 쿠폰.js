function solution(chicken) {
    let result = 0;
    while(1){
        if(chicken < 10) break;
        let service = Math.floor(chicken / 10)
        result += service
        chicken = chicken % 10 + service;
    }
    return result
}