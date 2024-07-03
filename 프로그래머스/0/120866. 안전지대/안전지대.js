function solution(board) {
    let total = board.length ** 2
    const danger = [];
    for(let i = 0 ; i < board.length ; i++){
        for(let j = 0 ; j < board[i].length ; j++){
            if(board[i][j]) {
                danger.push([i,j])
                total--;
            }
        }
    }
    if(!total) return total
    
    // 지뢰 주변 표시
    danger.forEach((item) => {
        for (let i = -1 ; i <= 1 ; i++) {
            for (let j = -1 ; j <= 1 ; j++) {
                const nx = item[0] + i;
                const ny = item[1] + j;
                if (nx >= 0 && nx < board.length && ny >= 0 && ny < board.length && !board[nx][ny]) {
                    board[nx][ny] = 1;
                    total--;
                }
            }
        }
    });
    return total
}