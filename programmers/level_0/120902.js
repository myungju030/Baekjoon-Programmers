// 문자열 계산하기
function solution(my_string) {
    var answer = 0;
    let arr = my_string.split(' ');
    for(let i=0; i<arr.length; i++){
        if(Number(arr[i])){
            arr[i] = Number(arr[i]);
        }
    }
    
    for(let i=0; i<arr.length; i++){
        if(typeof(arr[i])==='string'){
            if(arr[i]==='+')
            {
                arr[i+1] = arr[i-1] + arr[i+1]; 
            }
            else{
                arr[i+1] = arr[i-1] - arr[i+1];
            }
        }
    }
    
    
    return arr[arr.length-1];
}