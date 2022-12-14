// 소수 찾기
function solution(n) {
    var answer = 1;
    let count = 0;
    for(let i=3; i<=n; i++){
        count = 0;
        for(let j=2; j<=Math.sqrt(i); j++){
            if(i%j===0){
                count++
                break;
            }
        }
        if(count===0){
            answer++;
        }
    }
    return answer;
}