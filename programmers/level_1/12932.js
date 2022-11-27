// 자연수를 뒤집어 배열로 만들기
function solution(n) {
    return String(n).split('').reverse().map(x=>Number(x));
}