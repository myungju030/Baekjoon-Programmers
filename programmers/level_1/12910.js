// 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
    let filteredArr = arr.filter(x=>x%divisor===0).sort((a,b)=>a-b);
    if(filteredArr.length !== 0) return filteredArr;
    else return [-1]
    return answer;
}