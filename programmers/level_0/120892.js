// 암호 해독
function solution(cipher, code) {
    var answer = '';
    for(let i=code-1; i<cipher.length; i+=code){
      answer = answer + cipher.slice(i, i+1);  
    }
    
    return answer;
}