// 컨트롤 제트
function solution(s) {
    var answer = 0;
    let a = [];
    let arr = s.split(' ');
    for(let i=0; i<arr.length; i++){
        if(arr[i]==='Z'){
           a.pop();
        }
        else{
            a.push(arr[i]);
        }
    }

    answer = a.reduce((a,b)=>Number(a)+Number(b),0);
    return answer;
}