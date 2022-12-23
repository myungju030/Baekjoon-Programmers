// 과일 장수
function solution(k, m, score) {
  var answer = 0;
  let arr = [];
  let newArr = [];
  score.sort((a, b) => b - a);
  for (let i = 1; i <= score.length; i++) {
    if (i % m === 0 && i - 1 >= 0) {
      newArr.push(score[i - 1]);
      arr.push(newArr);
      newArr = [];
    } else {
      newArr.push(score[i - 1]);
    }
  }
  arr = arr.map((el) => Math.min(...el) * m);
  return arr.reduce((a, b) => a + b, 0);
}
