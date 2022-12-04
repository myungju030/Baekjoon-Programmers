// 옹알이(2)
function solution(babbling) {
    let answer = 0;
    let arr = ["aya", "ye", "woo", "ma"];
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<babbling.length; j++){
            babbling[j] = babbling[j].replaceAll(arr[i],i+1);
        }
    }
    
    babbling = babbling.filter(x=>{return Number(x) && !x.includes(11) && !x.includes(22) && !x.includes(33) && !x.includes(44) })
    return  babbling.length;
}