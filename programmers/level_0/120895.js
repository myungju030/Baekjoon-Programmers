// 인덱스바꾸기
function solution(my_string, num1, num2) {
    var answer = '';
    let temp=my_string[num1];
    let arr = my_string.split('')
    arr.splice(num1, 1, my_string[num2]);
    arr.splice(num2, 1, temp);
    return arr.join('');
}