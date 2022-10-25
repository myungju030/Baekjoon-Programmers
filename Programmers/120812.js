//최빈값 구하기
function solution(array) {

    let obj = {};
    array.forEach((x)=>{
        if(obj[x]){
            obj[x] += 1;
        }else{
            obj[x] = 1;
        }
    })

    let max= obj[Object.keys(obj)[0]];
    let index= Object.keys(obj)[0];
    
    for(const x in obj){
        if (obj[x] > max) {
            max = obj[x];
            index = x;
        }
    }
    let sum=0;
     for(const x in obj){
         if (obj[x] === max) {sum += 1;}
     }
    if(sum > 1){return -1;}
    else{return Number(index);}
    
}