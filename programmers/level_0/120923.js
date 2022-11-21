// 연속된 수의 합
function solution(num, total) {
    var answer = [];
    let arr = Array.from({length: num}, (_,i)=>i);
    let sum = arr.reduce((a,b)=>a+b);
    return arr.map(x=>x - (sum - total) / num);
}