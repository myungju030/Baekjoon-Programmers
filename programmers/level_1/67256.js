// 키패드 누르기
function solution(numbers, hand) {
  var answer = "";
  let right = 12;
  let left = 10;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      numbers[i] = 11;
    }
    if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
      answer += "L";
      left = numbers[i];
    } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
      answer += "R";
      right = numbers[i];
    } else {
      let r =
        Math.floor(Math.abs(numbers[i] - right) / 3) +
        Math.floor(Math.abs(numbers[i] - right) % 3);
      let l =
        Math.floor(Math.abs(numbers[i] - left) / 3) +
        Math.floor(Math.abs(numbers[i] - left) % 3);
      if (r < l) {
        answer += "R";
        right = numbers[i];
      } else if (r > l) {
        answer += "L";
        left = numbers[i];
      } else {
        answer += hand === "right" ? "R" : "L";
        hand === "right" ? (right = numbers[i]) : (left = numbers[i]);
      }
    }
  }
  return answer;
}
