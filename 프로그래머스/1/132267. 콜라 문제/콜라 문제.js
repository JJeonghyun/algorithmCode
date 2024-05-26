function solution(a, b, n) {
    // 빈병을 a로 나눈 몫 * b 만큼 콜라 병수
    // 그 콜라 병수를 새롭게 얻은 콜라이므로 결과값에 더함
    // 그 나머지는 교체 하지 못한 빈병들
    // 나머지 빈병들과 얻은 콜라 병수를 빈병으로 생각해서 n을 재정의
    // n이 교환하고자 하는 a보다 작을때 까지 반복
    
    let result = 0; // 얻은 총 콜라 병수
    let remind = 0; // 남은 빈병 수
    
    while(1) {
        if(n < a) break;
        let getCoke = Math.floor(n / a) * b; // 교환으로 얻은 콜라 수
        remind = n % a; // 교환 후 남은 빈병
        n = getCoke + remind; // 새로 얻은 콜라와 남은 빈병을 합쳐 다시 n을 업데이트
        result += getCoke; // 결과에 새로 얻은 콜라를 더함
    }
    
    return result;
}