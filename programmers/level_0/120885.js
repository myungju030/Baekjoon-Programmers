// 이진수 더하기
function solution(bin1, bin2) {
    var answer = [];
    let max=bin1.length >= bin2.length ? bin1 : bin2;
    let min=bin1.length < bin2.length ? bin1 : bin2;
    let sum=0;
    let leng= max.length-min.length;
    for(let i=0; i<leng; i++){
        min = '0' + min;
    }
    for(let j=max.length-1; j>=0; j--){
            sum += Number(max[j]) + Number(min[j]);
            if(sum === 0 || sum === 1){answer.unshift(sum); sum = 0;}
            else if(sum === 2){answer.unshift(0); sum = 1 }
            else if(sum === 3){answer.unshift(1); sum = 1}
        }
        if(sum === 1 ){answer.unshift(1);}
    return answer.join('');
}

