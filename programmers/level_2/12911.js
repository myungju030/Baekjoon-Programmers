// 다음 큰 숫자
function solution(n) {
  let answer = n.toString(2).split("").filter((x) => x === "1").length;

  while (true) {
    n++;
    if (answer === n.toString(2).split("").filter((x) => x === "1").length) 
    {
      return n;
    }
  }
}
