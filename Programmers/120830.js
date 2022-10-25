//양꼬치
function solution(n, k) {
    var answer = 0;
    answer = 12000 * n + 2000*k -(Math.floor(n/10)*2000);
    
    return answer;
}