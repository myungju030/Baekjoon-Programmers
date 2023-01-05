// 이진 변환 반복하기
function solution(s) {
  let answer = 0; // 총 제거한 0의 개수
  let sum = 0; // 제거할 0의 개수
  let count = 0; // 이진 변환 횟수

  while (s.length > 1) {
    for (const el of s) {
      sum += el === "0" ? 1 : 0; // 제거할 0의 개수 계산
    }

    s = (s.length - sum).toString(2); // 0 제거 후 길이를 이진 변환
    answer += sum; // 총 제거한 0의 개수 계산
    sum = 0; // 제거할 0의 개수 리셋
    count++; // 이진 변환 횟수
  }

  return [count, answer];
}
