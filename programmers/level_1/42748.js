// K번째수
function solution(array, commands) {
    var answer = [];
    
  for(let i=0; i<commands.length; ++i)
        {   
            let clone= [];
            clone = array.slice(commands[i][0]-1,commands[i][1]);
            clone.sort((a , b) => a - b);
            answer.push(clone[commands[i][2]-1]);
        }
    return answer;
}