// 카펫
function solution(brown, yellow) {
  var answer = [];
  let result = brown + yellow;
  for (let i = 1; i <= result; i++) {
    if (result % i === 0) {
      answer.push([result / i, i]);
    }
  }

  return answer.filter(
    (x) => x[0] * 2 + x[1] * 2 - 4 === brown && x[0] >= x[1]
  )[0];
}
