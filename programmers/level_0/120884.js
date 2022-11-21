// 치킨 쿠폰
function solution(chicken) {
    var answer = 0;
    let rest = 0;
    let share = 0;
    while(chicken > 0){
        rest += chicken % 10;
        chicken = (chicken - (chicken%10)) / 10;
        share += chicken;
    }
    share += (rest- (rest%10)) / 10; 
    share += (rest%10 + (rest -(rest%10)) / 10) / 10 ;
   
    return Math.floor(share);
}