// 3진법 뒤집기
function solution(n) {
    var answer = 0;
    let arr=[];
    while(n>0){
        if(n%3===0){
            n = n/3
            arr.unshift(0);
        }
        else if(n%3===1){
            n = (n-1)/3
            arr.unshift(1)
        }
        else if(n%3===2){
            n = (n-2)/3
            arr.unshift(2)
        }
    }
    
    answer = arr.reduce((acc,el,idx)=>idx===0? acc+el : acc+el*(3**idx),0)
    return answer;
}