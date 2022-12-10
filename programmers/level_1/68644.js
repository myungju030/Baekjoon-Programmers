// 두 개 뽑아서 더하기
function solution(numbers) {
    var answer = [];
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            sum = numbers[i] + numbers[j];
            answer.push(sum);
            sum = 0;
        }
    }
    return answer.filter((el,idx)=> idx === answer.indexOf(el)).sort((a,b)=>a-b)
    
}