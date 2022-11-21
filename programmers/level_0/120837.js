//개미 군단
function solution(hp) {
    var answer = 0;
    let top=5;
    let middle=3;
    answer += Math.floor(hp/top);
    answer += Math.floor(hp%top/middle);
    answer += hp%top%middle;
    return answer;
}