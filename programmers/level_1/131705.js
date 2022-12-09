// 삼총사
function solution(number) {
    var answer = 0;
    let count = 0;
    number.sort((a,b)=>a-b)
    for(let i=0; i<number.length-2; i++){
        for(let j=i+1; j<number.length-1; j++){
            for(let z=j+1; z<number.length; z++){
                answer = number[i]+number[j]+number[z];
                if(answer === 0) count++; 
                answer = 0;
            }
        }      
        
        
    }
    return count;
}