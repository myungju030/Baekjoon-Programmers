//배열 자르기
function solution(numbers, num1, num2) {
    var answer = [];
    let j=0;
    for(let i=num1; i<=num2; i++){
        answer[j] =numbers[i];
        j++
    }
    return answer;
}