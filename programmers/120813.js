//짝수는 싫어요
function solution(n) {
    var answer = [];
    let array=[];
    for(let i=1; i<=n; i++)
        {
            array[i]=i;
        }
    answer = array.filter(x=>x%2===1);
    return answer;
}