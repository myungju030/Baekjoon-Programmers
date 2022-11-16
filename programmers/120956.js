// 옹알이(1)
function solution(babbling) {
    var answer = 0;
    let arr = ["aya", "ye", "woo", "ma"];
    for(let i=0; i<babbling.length; i++){
        for(let j=0; j<arr.length; j++){
            if(babbling[i].includes(arr[j])){
                babbling[i]=babbling[i].replaceAll(arr[j], '1');        
            }
        }
    }
    
   return babbling.filter(x=>Number(x)).length;
}