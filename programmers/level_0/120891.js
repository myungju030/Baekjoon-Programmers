// 369게임
function solution(order) {
    let sum=0;
    
    String(order).split('').map(x => {x==='3' || x==='6' || x==='9' ? sum +=1 : sum += 0} )
    return sum;
}