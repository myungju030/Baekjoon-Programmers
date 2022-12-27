// 햄버거 만들기
function solution(ingredient) {
  var answer = 0;
  let arr = [];
  for (let i = 0; i < ingredient.length; i++) {
    arr.push(ingredient[i]);

    if (arr.length >= 4) {
      if (arr.slice(-4).join("") === "1231") {
        arr.pop();
        arr.pop();
        arr.pop();
        arr.pop();
        answer++;
      }
    }
  }
  return answer;
}
