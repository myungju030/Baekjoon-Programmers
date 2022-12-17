// 가장 가까운 같은 글자
function solution(s) {
    var answer = [];
    let arr = s.split('');
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        if(newArr.includes(arr[i])){
            answer.push(i-newArr.lastIndexOf(arr[i]));
            newArr.push(arr[i]);
        }
        else
        {
            answer.push(-1);  
            newArr.push(arr[i]);
        }
    }
    return answer;
}