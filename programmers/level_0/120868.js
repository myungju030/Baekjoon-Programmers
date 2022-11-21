// 삼각형의 완성조건(2)
function solution(sides) {
    var answer = 0;
    let max=Math.max(...sides);
    let min=Math.min(...sides);
    
    for(let i=1; i<max; i++){
        if(min+i > max && i <= max)
            {
                answer++;
            }
    }
     for(let i=max+1; i<=min+max; i++){
         answer++;
     }
    
    
    return answer;
}