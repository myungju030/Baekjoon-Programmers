//순서쌍의 개수
function solution(n) {

    let sum=0;
    for(let i=1; i<=n; i++){
       if(n%i === 0){
           sum++;
       }
    }
    return sum;
}