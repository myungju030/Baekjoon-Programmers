// 문자열 다루기 기본
function solution(s) {
    if(s.length === 4 || s.length === 6){
        if(/^[0-9]+$/.test(s)) return true;
    }
    return false;
}