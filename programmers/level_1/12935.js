// 제일 작은 수 제거하기
function solution(arr) {
    let min=arr.reduce((a,b)=>a <= b ? a : b)
    arr.splice(arr.indexOf(min),1)
    if(arr.length===0)return [-1]
    else return arr;
}