//외계행성의 나이
function solution(age) {
    let answer='';
    let index=0;
    let array = String(age).split('');
    
    for(let i=0; i<array.length; i++){
        index=array[i];
        
        answer = answer + String.fromCharCode(Number(index)+97);
    }
    return answer;
}