// [1차] 다트 게임
function solution(dartResult) {
    var answer = [];
    let str = '';
    for(let i=0; i<dartResult.length; i++){
        if(/[SDT*#]/.test(dartResult[i])){
            if(str !== ''){answer.push(str)}
            answer.push(dartResult[i]);
            str ='';
        }
        else{
            str += dartResult[i];
        }
    }
    for(let i=0; i<answer.length; i++){
        if(Number(answer[i])){
            answer[i] = Number(answer[i]);
        }
        else if(answer[i]==='S'){
            answer[i-1] = Math.pow(answer[i-1],1);
        }
        else if(answer[i]==='D'){
            answer[i-1] = Math.pow(answer[i-1],2);
        }
        else if(answer[i]==='T'){
            answer[i-1] = Math.pow(answer[i-1],3); 
        }
     
    }
     answer = answer.filter(x=>/[SDT]/.test(x)===false)
    for(let i=0; i<answer.length; i++){
        if(answer[i]==='#'){
            answer[i-1] = answer[i-1]*(-1);
        }
        else if(answer[i]==='*'){
            if(i===1){
                answer[i-1] = answer[i-1]*2;
            }
            else{
                answer[i-1] = answer[i-1]*2;
                if(Number(answer[i-2])){answer[i-2] = answer[i-2]*2}
                else if(Number(answer[i-3])){answer[i-3] = answer[i-3]*2;}
            }
        }
    }
     return answer.filter(x=>Number(x)).reduce((a,b)=>a+b,0);

   
}