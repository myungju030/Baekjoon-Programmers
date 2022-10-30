//배열 회전시키기
function solution(numbers, direction) {
    let answer=[];
    let a=0
    if(direction==="right"){
        a = numbers.pop();
        numbers.unshift(a);
    }
    else{
        a = numbers.shift();
        numbers.push(a);
    }
    return numbers;
}