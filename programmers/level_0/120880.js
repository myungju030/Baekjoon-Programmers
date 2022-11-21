// 특이한 정렬
function solution(numlist, n) {
    var answer = {};
    let arr = numlist.map(x=>n-x).sort((a,b)=>Math.abs(a)-Math.abs(b))
    for(let i=0; i<numlist.length-1; i++){
        if(arr[i] === Math.abs(arr[i+1])){
            [arr[i],arr[i+1]] = [arr[i+1], arr[i]];
        }
    }
    for(let i=0; i<numlist.length; i++){
        if(arr[i]<0){
           arr[i] = n-arr[i];
        }
        else{
            arr[i] = n-arr[i];
        }
    }
return arr
}