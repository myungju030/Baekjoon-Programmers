// JadenCase 문자열 만들기
function solution(s) {
  var answer = "";
  for (let i = 0; i < s.length; i++) {
    if (i === 0 && typeof s[i] === "string") {
      s = s.slice(0, i) + s[i].toUpperCase() + s.slice(i + 1);
    } else if (s[i - 1] === " " && typeof s[i] === "string") {
      s = s.slice(0, i) + s[i].toUpperCase() + s.slice(i + 1);
    } else {
      s = s.slice(0, i) + s[i].toLowerCase() + s.slice(i + 1);
    }
  }
  return s;
}
