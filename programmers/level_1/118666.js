// 성격 유형 검사하기
function solution(survey, choices) {
  var answer = "";
  let arr = ["R", "T", "C", "F", "J", "M", "A", "N"];
  let obj = {};
  let num;
  survey = survey.map((el) => el.split(""));
  choices = choices.map((el, index) => {
    if (el === 1 || el === 2 || el === 3) {
      if (el === 1) num = 3;
      else if (el === 2) num = 2;
      else num = 1;
      obj[survey[index][0]] = obj[survey[index][0]] + num || num;
    } else if (el === 5 || el === 6 || el === 7) {
      if (el === 5) num = 1;
      else if (el === 6) num = 2;
      else num = 3;
      obj[survey[index][1]] = obj[survey[index][1]] + num || num;
    }
  });
  arr.map((el) => (obj[el] ? obj[el] : (obj[el] = 0)));
  if (obj["R"] > obj["T"]) answer += "R";
  else if (obj["R"] === obj["T"]) answer += "R";
  else answer += "T";

  if (obj["C"] > obj["F"]) answer += "C";
  else if (obj["C"] === obj["F"]) answer += "C";
  else answer += "F";

  if (obj["J"] > obj["M"]) answer += "J";
  else if (obj["J"] === obj["M"]) answer += "J";
  else answer += "M";

  if (obj["A"] > obj["N"]) answer += "A";
  else if (obj["A"] === obj["N"]) answer += "A";
  else answer += "N";

  return answer;
}
