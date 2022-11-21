// 다항식 더하기
function solution(polynomial) {
    var answer = '';
    let x_sum=0;
    let sum=0;
    let arr=polynomial.split(' + ');
    for(let i=0; i<arr.length; i++){
        if(arr[i].includes('x')){
            if(arr[i].length>1){
                x_sum += Number(arr[i].slice(0,-1)); 
            }
            else{
                x_sum += 1;
            }
        }
        else if(Number(arr[i])){
            sum += Number(arr[i]);
        }
    }
    if(x_sum === 0 && sum === 0) return '0';
    else if(sum === 0) {return x_sum === 1 ? `x` :`${x_sum}x` }
    else if(x_sum === 0) return `${sum}`;
    else return x_sum === 1 ? `x + ${sum}` :  `${x_sum}x + ${sum}`;

}