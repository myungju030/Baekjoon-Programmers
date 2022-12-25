// 숫자 짝궁
function solution(X, Y) {
  let answer = "";
  const obj = {};
  const arr = [];

  for (const num of X) {
    obj[num] = (obj[num] || 0) + 1;
  }

  for (const num of Y) {
    if (obj[num]) {
      arr.push(num);
      obj[num] -= 1;
    }
  }

  answer = arr.length > 0 ? arr.sort((a, b) => b - a).join("") : "-1";

  if (answer[0] === "0") answer = "0";

  return answer;
}
