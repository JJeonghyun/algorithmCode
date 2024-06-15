function solution(num_list) {
    let result = 0;
    num_list.forEach((item)=>{
        while(1){
            if(item === 1) break;
            if(item % 2){
                item = (item - 1) / 2
            }else{
                item /= 2
            }
            result++;
        }
    })
    return result
}