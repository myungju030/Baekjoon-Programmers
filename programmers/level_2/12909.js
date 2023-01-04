// 올바른 괄호
function solution(s) {
  let answer = 0;

  for (const el of s) {
    if (el === "(") {
      answer++;
    } else if (el === ")") {
      answer--;
      if (answer < 0) return false;
    }
  }

  return answer === 0;
}
