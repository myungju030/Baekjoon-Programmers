//각도기
function solution(angle) {
    var answer = 0;
    answer= 0<angle && angle<=90 ? angle===90? 2: 1 : angle===180? 4 : 3;
    return answer;
}