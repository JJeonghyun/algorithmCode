function solution(id_pw, db) {
    for(const item of db){
        if(item[0] === id_pw[0]) {
            if(item[1] === id_pw[1]) return 'login'
            else return "wrong pw"
        }
    }
    return 'fail'
}