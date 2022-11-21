// 가까운 수
function solution(array, n) {
    var answer = 0;
    let min = Math.abs(array[0]-n);
    let index=0;
    for(let i=1; i<array.length; i++){
       if(Math.abs(array[i] - n) <= min ){
           if(Math.abs(array[i]-n) === min){
               array[i] < array[index] ? index = i :  index = index;
           }else{
            min = Math.abs(array[i]-n);
            index = i;
           }
       }
    }

    return array[index];
}