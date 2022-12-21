// 체육복
function solution(n, lost, reserve) {
    let answer = n-lost.length;
    lost.sort((a,b)=>a-b);
    let newLost = lost.map(x=>{
        if(reserve.includes(x)){
            answer++;
            return null;
        }else{
            return x;
        }
    }).filter(x=>x!==null);
    let newReserve = reserve.map(x=>{
        if(lost.includes(x)){
            return null;
        }else{
            return x;
        }
    }).filter(x=>x!==null);
    for(let i=0; i<newLost.length; i++){
        if(newReserve.includes(newLost[i])){
            answer++;
            newReserve[newReserve.indexOf(newLost[i])]=undefined;
        }
        else if(newReserve.includes(newLost[i]-1)) {
            answer++;
            newReserve[newReserve.indexOf(newLost[i]-1)]=undefined;
        }
        else if(newReserve.includes(newLost[i]+1)){
            answer++;
            newReserve[newReserve.indexOf(newLost[i]+1)]=undefined;
        }
    }
    return answer;
}