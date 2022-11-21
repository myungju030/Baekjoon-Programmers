// n의 배수 고르기
function solution(n, numlist) {
    let arr=[];
    let j=0;
    for(let i=0; i<numlist.length; i++){
        if(numlist[i]%n === 0)
        {
            arr[j++] = numlist[i];
        }
    }
    
    
    return arr;
}