// OX퀴즈
function solution(quiz) {
    var answer = [];
    let arr = quiz.map(x=>x.split('= '));
    for(let i=0; i<arr.length; i++){
        if(eval(arr[i][0])===Number(arr[i][1])){
            answer.push("O");
        }
        else{
            answer.push("X")
        }
    }
    return answer;
}