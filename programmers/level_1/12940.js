// 최대공약수와 최소공배수
function solution(n, m) {
    var arr = [1];
    let min=Math.min(n,m)
    let num=2;
    let answer=0;
    while(num<=min){
        if(n%num===0 && m%num===0){
            n=n/num;
            m=m/num;
            arr.push(num)
        }
        else{
            num++;
        }
    }
    answer = arr.reduce((a,b)=>a*b,1)
    return [answer, answer*n*m];
}