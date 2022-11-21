//구슬을 나누는 경우의 수 (BigInt다시 풀어보기!)
function factorial(a){
    if(a===1){return 1}
    else{return a*factorial(a-1)}
    }

function solution(balls, share) {
        
    if(balls ===  share) {return 1;}
    return Math.round(factorial(balls) / (factorial(balls-share) * factorial(share)));
}