//중복된 숫자 개수
function solution(array, n) {
    var answer = 0;
    array.filter(value=> {value===n? answer++ : answer});
    return answer;
}