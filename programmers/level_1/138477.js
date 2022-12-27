// 명예의 전당(1)
function solution(k, score) {
  var answer = [];
  let arr = [];
  for (let i = 0; i < score.length; i++) {
    arr.push(score[i]);
    arr.sort((a, b) => b - a);
    if (arr.length < k) {
      answer.push(arr[arr.length - 1]);
    } else {
      answer.push(arr[k - 1]);
    }
  }
  return answer;
}
