// 문자열 나누기
function solution(s) {
  var answer = 0;
  let x = s[0];
  let xNum = 0;
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (x === s[i]) {
      xNum++;
    } else {
      num++;
    }
    if (xNum === num || i === s.length - 1) {
      answer++;
      x = s[i + 1];
    }
  }
  return answer;
}
