//배열 원소의 길이
function solution(strlist) {
    var answer = [];
    for(let i=0; i<strlist.length; i++){
        answer[i]= strlist[i].length;
    }
    return answer;
}