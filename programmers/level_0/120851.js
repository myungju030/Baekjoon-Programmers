// 숨어있는 숫자의 덧셈(1)
function solution(my_string) {
    return my_string.replace(/[^0-9]/g,'').split('').reduce((a,b)=>Number(a)+Number(b));
}