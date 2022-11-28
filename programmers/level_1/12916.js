// 문자열 내 p와 y의 개수
function solution(s){
    let pNum = 0;
    let yNum = 0;
    s = s.toUpperCase();
    
    for(let i=0; i<s.length; i++){
        if(s[i]==='P') pNum++;
        else if(s[i]==='Y') yNum++;
    }
    
    return pNum===yNum? true : false;
}