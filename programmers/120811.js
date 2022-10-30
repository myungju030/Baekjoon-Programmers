//중앙값구하기
function solution(array) {
    var answer = 0;
    let alength= Math.floor(array.length / 2);
    array = array.sort((a,b)=>a-b);//정수 오름차순 배열
    answer=array[alength];
    return answer;
}