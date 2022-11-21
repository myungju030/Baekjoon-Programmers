//분수의 덧셈
function solution(denum1, num1, denum2, num2) {
    var answer = [];
    let denum3 = denum1*num2 + denum2*num1;
    let num3 = num1 * num2;
    let gcd = (a ,b) => ( a % b === 0 ? b : gcd(b, a % b) );
    
    answer[0] = denum3/gcd(denum3, num3);
    answer[1] = num3/gcd(denum3, num3);
    
    return answer;
}