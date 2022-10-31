//합성수 찾기
function solution(n) {
    var answer = 0;
    for(let i=4; i<=n; i++){
        for(let j=2; j<=Math.sqrt(i); j++){
            if(i%j === 0){answer += 1; break;}
        }
    }
    return answer;
}