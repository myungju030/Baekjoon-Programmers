// 유한소수 판별하기
function solution(a, b) {
    var answer = 0;
    let arr=[];
    let n=2;
    let gcd = (a ,b) => ( a % b === 0 ? b : gcd(b, a % b) );
    answer = b/gcd(a,b);
  
    while(answer!==1){
        if(answer%n===0){
            arr.push(n);
            answer = answer/n;
        }
        else{
            n++;
        }
    }
    
    for(let i=0; i<arr.length; i++){
        if(arr[i]!==2 && arr[i]!==5){
            return 2;
        }
    }
    return 1;
}