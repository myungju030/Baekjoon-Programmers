//진료순서 정하기
function solution(emergency) {
    let index= [];   
    let answer = emergency.slice(0);
    answer.sort((a,b)=>b-a);
    for(let i=0; i<emergency.length; i++){
        for(let j=0; j<emergency.length; j++){
            if(emergency[i]===answer[j]){
                index[i] = j+1;

            }
        }
    }
    
    
    return index;
}