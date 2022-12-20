// 로또의 최고 순위와 최저 순위
function solution(lottos, win_nums) {
    var answer = [];
    let count = 0;
    for(let i=0; i<lottos.length; i++){
        if(win_nums.includes(lottos[i])){
            count++;
        }
    }
    let second = lottos.filter(x=>x===0).length + count;
    if(second === 6){answer.push(1)}
    else if(second === 5){answer.push(2)}
    else if(second === 4){answer.push(3)}
    else if(second === 3){answer.push(4)}
    else if(second === 2){answer.push(5)}
    else {answer.push(6)}
    
    if(count === 6){answer.push(1)}
    else if(count === 5){answer.push(2)}
    else if(count === 4){answer.push(3)}
    else if(count === 3){answer.push(4)}
    else if(count === 2){answer.push(5)}
    else{answer.push(6)}
  
    
    return answer;
}