// [1차] 비밀지도
function solution(n, arr1, arr2) {
    var answer = Array.from(Array(arr1.length),()=>Array());
    arr1 = arr1.map(x=>x.toString(2).split(''));
    arr2 = arr2.map(x=>x.toString(2).split(''));

    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(arr1[i].length < n){
                arr1[i].unshift('0');
            }
            if(arr2[i].length < n){
                arr2[i].unshift('0');
            }
        }
    }
    
     for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(arr1[i][j] === '1' || arr2[i][j] === '1'){
               answer[i][j] = '#';
            }
            else{
                answer[i][j] = ' ';
            }
        }
    }
    
    return  answer.map(x=>x.join(''));
}