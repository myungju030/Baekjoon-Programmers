// 하샤드 수
function solution(x) {
    if(x%String(x).split('').reduce((a,b)=>Number(a)+Number(b))===0) return true;
    else return false;
}