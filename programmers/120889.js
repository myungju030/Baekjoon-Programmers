//삼각형의 완성조건(1)
function solution(sides) {
    return sides.reduce((a,b)=>a+b)-Math.max(...sides) > Math.max(...sides) ? 1: 2; 
 
 }