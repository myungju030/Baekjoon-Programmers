//가위 바위 보
function solution(rsp) {
    var answer = rsp.split('').map(x=>{
        if(x==="2"){return "0"}
        else if(x==="0"){return "5"}
        else{return "2"}
    }).join('');
    
    
    
    
    return answer;
}