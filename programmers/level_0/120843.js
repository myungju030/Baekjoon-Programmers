//공 던지기
function solution(numbers, k) {
    var answer = 0;
    let a=0;
    let b=0;
    for(let i=0; i<k-1; i++){
        a = numbers.shift();
        b = numbers.shift();
        numbers.push(a);
        numbers.push(b);
    }
    
    return numbers[0];
}