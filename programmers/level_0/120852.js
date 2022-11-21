// 소인수분해
function solution(n) {
    var answer = [];
    let arr=[];
    let isPrime= true;
    let z=0;
    let a=0;
    for(let i=2; i<=n; i++){
        if(n%i===0){answer[z++]=i}
    }
    for(let i=0; i<answer.length; i++){
        isPrime=true;
        for(let j=2; j<answer[i]; j++){
            if(answer[i]%j===0){isPrime=false; }
        }
        if(isPrime){arr[a++]=answer[i]}
    } 
   
    return arr;
}