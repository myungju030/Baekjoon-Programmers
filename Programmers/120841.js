//점의 위치 구하기
function solution(dot) {
    var answer = 0;
    
    if(dot[0]>0 && dot[1]>0) {return 1;}
    else if(dot[0]>0 && dot[1]<0){return 4;}
    else if(dot[0]<0 && dot[1]>0){return 2;}
    else{return 3;}
    return answer;
}