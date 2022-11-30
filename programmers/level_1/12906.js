// 같은 숫자는 싫어
function solution(arr){
    return arr.filter((el,idx)=> el !== arr[idx+1]);
 }