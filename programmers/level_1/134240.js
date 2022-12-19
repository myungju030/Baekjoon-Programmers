// 푸드 파이트 대회
function solution(food) {
    var answer = '';
    let reAnswer = '';
    for(let i=0; i<food.length; i++){
        food[i] = Math.floor(food[i]/2);
    }
    for(let i=1; i<food.length; i++){
        for(let j=0; j<food[i]; j++){
            answer += i+'';
          
        }
    }
    reAnswer = answer.split('').reverse().join('');
    return answer+'0'+reAnswer;
}