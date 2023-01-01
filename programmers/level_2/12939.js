// 최댓값과 최솟값
function solution(s) {
  var answer = "";
  let arr = s.split(" ").map((x) => Number(x));
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return `${min} ${max}`;
}
