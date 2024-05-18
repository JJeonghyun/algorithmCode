function solution(arr) {
    let count = 0;
    let prevArr = [];
    let afterArr = [];
    
    while(1){
        prevArr = arr;
        afterArr = arr.map((item)=>{
            if(item >= 50 && !(item % 2)) return item /= 2;
            if(item < 50 && item%2) return item = item *2 +1;
        })
        if(prevArr.length === afterArr.length){ 
           const isCheck = prevArr.every((elem,idx)=> elem === afterArr[idx]);
            if(isCheck) {
                count--;
                break;
            }
            else {
                count++;
                arr = afterArr;
            }
        }
    }
    return count;
}