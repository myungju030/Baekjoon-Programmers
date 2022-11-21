//약수 구하기
function solution(n) {
    var answer = [];
    let j=0
    for(let i=1; i<=n; i++){
        if(n%i===0){answer[j]=i;  j++;}
    }
    return answer;
}