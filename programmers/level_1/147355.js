// 크기가 작은 부분 문자열
function solution(t, p) {
  var answer = 0;
  let arr = [];
  let str = "";
  for (let i = 0; i <= t.length - p.length; i++) {
    for (let j = 0; j < p.length; j++) {
      str += t[i + j];
    }
    arr.push(str);
    str = "";
  }

  return arr.filter((x) => x <= p).length;
}
