//아이스 아메리카노
function solution(money) {
    var answer = [];
    let sum=0;
    let charge=0;
    
    sum = Math.floor(money / 5500);
    charge = money - (sum*5500);
    answer=[sum,charge];
    return answer;
}