// 숨어있는 숫자의 덧셈(2)
function solution(my_string) {
   
    let arr = my_string.match(/[0-9]+/g);
    return arr ? arr.map(x=>+x).reduce((a,b)=>a+b,0) : 0;
   
}