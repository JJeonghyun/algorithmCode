function solution(my_string) {
    let lowerList = 'abcdefghijklmnopqrstuvwxyz';
    let upperList = lowerList.toUpperCase();
    let totalList = [...upperList, ...lowerList];
     
    let result = Array(lowerList.length + upperList.length).fill(0);
    
    for(let i = 0 ; i< my_string.length ; i++){
        for(let j = 0 ; j < totalList.length; j++ ){
            if(my_string[i] === totalList[j]) result[j]++;
        }
    }
    return result
}