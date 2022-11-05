// 한 번만 등장한 문자
function solution(s) {
    var answer = '';
    let obj={};
    let arr= s.split('');
    let order=[];
    let j=0;
    for(let i=0; i<arr.length; i++){
        if(obj[arr[i]]){ obj[arr[i]] += 1;}
        else{obj[arr[i]] = 1;}
    }
    
    for(let item in obj){
        if(obj[item]===1){
            order[j++] = item
        }
    }
    
    
    return order.sort().join('');
}