// 캐릭터의 좌표
function solution(keyinput, board) {
    var answer = [];
    let x=0;
    let y=0;
    for(let i=0; i<keyinput.length; i++){
            if(keyinput[i] === 'left'){
                 x -= 1;
                if(x < -Math.floor(board[0]/2)){ x = -Math.floor(board[0]/2)}
            }
            else if(keyinput[i] === 'right'){
                x += 1;
                if(x > Math.floor(board[0]/2)){x = Math.floor(board[0]/2)}
            }
            else if(keyinput[i] === 'down'){
                y -= 1;
                if(y < -Math.floor(board[1]/2)){ y = -Math.floor(board[1]/2)}
            }
            else {
                y += 1;
                if(y > Math.floor(board[1]/2)){ y = Math.floor(board[1]/2)}
            }
    }
    return [x,y];
}