//자릿수 더하기
function solution(n) {
    var answer = 0;
    let s='';
    s=String(n);
    s=s.split('');
    let sum=0;
    for(let i=0; i<s.length; i++){
        sum += Number(s[i])
    }
    return sum;
}