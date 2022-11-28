// 정수 제곱근 판별
function solution(n) {
    if(Math.sqrt(n) > 0 && Math.sqrt(n)%1 === 0){
        return (Math.sqrt(n)+1) **2;
    }
    return -1;
}