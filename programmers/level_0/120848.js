//팩토리얼
function factorial(a){
    if(a === 1 ){return 1;}
    else{return a*factorial(a-1);}    
}
function solution(n) {
    var answer = 0;
    let i=1;
    while(n>=factorial(i)){
        i++;
    }
    return i-1;
}