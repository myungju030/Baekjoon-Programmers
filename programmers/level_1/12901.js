// 2016년
function solution(a, b) {
    var answer = '';
    let arr = [ 0, 31,29,31,30,31,30,31,31,30,31,30]
    
    for(let i=0; i<a; i++){
        b += arr[i];
    }
    
    if(b%7 === 1){
        return 'FRI';
    }else if(b%7 === 2){
        return 'SAT';
    }else if(b%7 === 3){
        return 'SUN';
    }else if(b%7 === 4){
        return 'MON';
    }else if(b%7 === 5){
        return 'TUE';
    }else if(b%7 === 6){
        return 'WED';
    }else if(b%7 === 0){
        return 'THU';
    }  
 
}