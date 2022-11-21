//문자열 정렬하기(1)
function solution(my_string) {
    return my_string.replace(/[^0-9]/gi, '').split('').sort((a,b)=>a-b).map(x=>Number(x));
}