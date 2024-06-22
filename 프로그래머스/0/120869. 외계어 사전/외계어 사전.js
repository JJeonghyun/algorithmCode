function solution(spell, dic) {
    let result = 2
    dic.forEach((item)=>{
        let cnt = 0;
        spell.forEach((elem)=>{
            if(item.includes(elem)) cnt++;
        })
        if(cnt === spell.length) result = 1;
    })
    return result 
}