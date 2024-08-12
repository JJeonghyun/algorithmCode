function solution(numer1, denom1, numer2, denom2) {
    const tongbunBottom = denom1 * denom2
    
    const tongbunTopA = numer1 * denom2
    const tongbunTopB = numer2 * denom1
    
    const tongbunTop = tongbunTopA + tongbunTopB
    
    let gcd = 1;
    for (let i = 1 ; i <= tongbunBottom ; i++) {
        if (!(tongbunBottom % i) && !(tongbunTop % i)) gcd = i
    }
    
    return [tongbunTop / gcd, tongbunBottom / gcd]
}