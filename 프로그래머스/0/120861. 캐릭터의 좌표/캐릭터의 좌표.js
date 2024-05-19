function solution(keyinput, board) {
    const maxX = Math.floor(board[0] / 2)
    const maxY = Math.floor(board[1] / 2)
    
    let startX = 0;
    let startY = 0;
    
    for(let i = 0 ; i < keyinput.length; i++){
        switch(keyinput[i]){
            case "left":
                if(Math.abs(startX - 1) <= maxX) startX -= 1
                break;
                case "right":
                if(Math.abs(startX + 1) <= maxX) startX += 1
                break;
                case "up":
              if(Math.abs(startY + 1) <= maxY) startY += 1
                break;
                case "down":
                 if(Math.abs(startY - 1) <= maxY) startY -= 1
                break;
        }
    }
    return [startX, startY]
}