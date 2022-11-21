//배열의 평균값
function solution(numbers) {
    var answer = 0;
    numbers.map(x=> answer +=x);
    answer= answer/numbers.length;
    return answer;
}