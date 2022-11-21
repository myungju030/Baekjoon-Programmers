// 잘라서 배열로 저장하기
function solution(my_str, n) {
    var answer = [];
    let num = n;
    for(let i=0; i<my_str.length; i+= num){
        answer.push(my_str.slice(i, n));
        n += num;
        
    }
    return answer;
}