// 약수의 합
function solution(n) {
    let sum=0;
    let arr = [];
    for(let i=1; i<=n; i++){
        if(n%i===0){
            sum += i;
        }
    }
    return sum;
    
}