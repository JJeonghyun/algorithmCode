function solution(n) {
    let baseTen = 1
    let curseThree = 1
    while(1){
        if(baseTen === n) break;
        else {
            baseTen++;
            curseThree++;
            while(true){
                if(curseThree % 3 && !(curseThree.toString().includes('3'))) break;
                curseThree++;
            }
        }
    }
    return curseThree
}