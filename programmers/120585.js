//머쓱이보다 키 큰 사람
function solution(array, height) {

    array = array.sort();
    let sum=0;
    for(let i=0; i<array.length; i++){
        if(array[i] > height){
            sum++;
        }
    }
    return sum;
}