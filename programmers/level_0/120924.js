// 다음에 올 숫자
function solution(common) {
    var answer = 0;
    let a=common[0];
    let i=common[1] - common[0];
    let j=common[2] - common[1];
    if(i===j)return a+common.length * i ;
    else return a*Math.pow(j/i,common.length)
}