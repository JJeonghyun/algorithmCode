function solution(code) {
    let mode = 0;
    let ret = ''
    
    for(let i = 0 ; i < code.length ; i++){
        if(!mode){
            if(code[i] !== '1'){
                if(!(i%2)) ret += code[i]
            }else{
                mode = 1;
            }
        }else{
            if(code[i] !== '1'){
                if(i%2) ret += code[i]
            }else{
                mode = 0;
            }
        }
    }
    return ret || 'EMPTY' 
}