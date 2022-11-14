// 등수 매기기
function solution(score) {
    var answer = [];
    let arr = [];
    let max=-1;
    let account = 0;
    let count = 1;
    let index=0;
    let before=-1;
    for(let i=0; i<score.length; i++){
        answer[i] = (score[i][0] + score[i][1]) / 2;
    }
  
    for(let i=0; i<answer.length; i++){
        for(let j=0; j<answer.length; j++){
            if(answer[j]>max){
                max = answer[j];
                index = j;
            }
        }       
        if(answer[index] === before){arr[index] = account; count += 1;}
        else{arr[index] = account = count; count += 1;}
        before = answer[index];
        answer[index] = -1;
        max =-1;
    }

    return arr;
}