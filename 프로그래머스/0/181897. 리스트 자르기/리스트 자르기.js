function solution(n, [a,b,c], num_list) {
    switch(n){
        case 1:
            return num_list.slice(0, b+1)
            case 2:
            return num_list.slice(a, num_list.length)
            case 3:
            return num_list.slice(a, b+1)
            case 4:
                const temp = [];
                for(let i = 0 ; i < num_list.slice(a, b+1).length ; i += c){
                    temp.push(num_list.slice(a, b+1)[i])
                }
                return temp    
    }
}