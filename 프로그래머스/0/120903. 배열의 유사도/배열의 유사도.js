function solution(s1, s2) {
 let longArr = s1.length >= s2.length ? s1 : s2
 let shortArr = s1.length < s2.length ? s1 : s2
    let result = 0;
    for(let i = 0 ; i<longArr.length ; i++){
        for(let j = 0 ; j < shortArr.length ; j++){
            if(longArr[i] === shortArr[j]) result++;
        }
    }
    return result;
 
}
