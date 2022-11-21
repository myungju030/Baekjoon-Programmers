// 안전지대
function solution(board) {
    var answer = 0;
    let xMax = 0, xMin = 0, yMax = 0, yMin = 0;
    let arr = Array.from(Array(board.length), ()=>Array(board.length).fill(0))
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++){
            if(board[i][j] === 1){
                xMin = i-1, xMax = i+1, yMin = j-1, yMax = j+1;
                if(xMin < 0){xMin = 0;}
                if(xMax > board.length-1){xMax = board.length-1;}
                if(yMin < 0){yMin = 0;}
                if(yMax >  board.length-1){yMax =  board.length-1;}
                arr[xMin][yMin] = 1;
                arr[xMin][j] = 1;
                arr[xMin][yMax]= 1;
                arr[i][yMin] = 1;
                arr[i][j] = 1;
                arr[i][yMax] = 1;
                arr[xMax][yMin] = 1;
                arr[xMax][j] = 1;
                arr[xMax][yMax] = 1;
            }
        }
    }
    
     for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            if(arr[i][j]===1){
                answer++;
            }       
        }
     }
    
    return (board.length ** 2) -answer;
}