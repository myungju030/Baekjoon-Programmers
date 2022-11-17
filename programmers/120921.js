// 문자열 밀기
function solution(A, B) {
    var answer = 0;
    let arr = A.split('')
    let i=0;
    if(A===B) return 0;
    while(i<arr.length){
    arr.unshift(arr.pop());
    i++;
    if(arr.join('')===B){return i;}
    }
    
    return -1;
}