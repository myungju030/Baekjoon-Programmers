// 완주하지 못한 선수
function solution(participant, completion) {
    var answer = '';
    let obj = {};
    for(let p of participant){
        obj[p] = obj[p] ? obj[p]+1:1;
    }
    for(let c of completion){
        obj[c] -= 1;
    }
    for(let key in obj){
        if(obj[key]==1) return key;
    }
   
}