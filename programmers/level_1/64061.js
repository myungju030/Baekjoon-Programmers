// 크레인 인형뽑기 게임
function solution(board, moves) {
  let count = 0;
  let arr = [];

  let newBoard = Array.from(Array(board.length), () => Array());

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      newBoard[j].push(board[i][j]);
    }
  }

  let filterBoard = [];

  for (let i = 0; i < board.length; i++) {
    filterBoard.push(newBoard[i].filter((v) => v !== 0));
  }

  for (let i = 0; i < moves.length; i++) {
    if (arr.length === 0) {
      arr.push(filterBoard[moves[i] - 1].shift());
    } else {
      let latestPick = arr[arr.length - 1];
      let newPick = filterBoard[moves[i] - 1].shift();

      if (latestPick === newPick && newPick !== undefined) {
        count++;
        arr.pop();
      } else {
        arr.push(newPick);
      }
    }
  }
  return count * 2;
}
