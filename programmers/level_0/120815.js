//피자 나눠 먹기(2)
function solution(n) {
    let answer = 1;
    while(true){
        if((6*answer)%n===0){ break;}
        answer++;
    }
    return answer;
}