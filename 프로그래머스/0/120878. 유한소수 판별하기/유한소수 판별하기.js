function solution(a, b) {    
    let result = 2;
    
    let gcd = 1;
    for (let i = 1 ; i <= a ; i++) if (!(a % i) && !(b % i)) gcd = i
    
    b /= gcd

    while(!(b % 2)) b /= 2
    
    while(!(b % 5)) b /= 5
    
    if(b === 1) result = 1;
    
    return result
}