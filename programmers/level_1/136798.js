// 기사단원의 무기
function solution(number, limit, power) {
  var answer = 0;
  let arr = [1];
  for (let i = 2; i <= number; i++) {
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0 && j === Math.sqrt(i)) {
        answer += 1;
      } else if (i % j === 0) {
        answer += 2;
      }
    }
    arr.push(answer);
    answer = 0;
  }
  return arr.map((el) => (el > limit ? power : el)).reduce((a, b) => a + b, 0);
}
