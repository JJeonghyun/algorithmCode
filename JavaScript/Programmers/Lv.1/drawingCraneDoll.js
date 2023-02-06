function solution(board, moves) {
  let answer = 0;
  let resultArr = [];
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1]) {
        if (resultArr[resultArr.length - 1] == board[j][moves[i] - 1]) {
          resultArr.pop();
          answer += 2;
          board[j][moves[i] - 1] = 0;
          break;
        } else {
          resultArr.push(board[j][moves[i] - 1]);
          board[j][moves[i] - 1] = 0;
          break;
        }
      }
    }
  }
  return answer;
}
