// 저주의 숫자3
function solution(n) {
    var answer = n;
    let arr=[]
    for(let i=1; 0<answer; i++){
        if(i%3 === 0 || String(i).split('').filter(x=>x==='3').length !== 0){
           continue;
        }
        else{
            arr.push(i);
            answer--;
        }
    }
    return arr.pop();
}