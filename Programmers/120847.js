//최댓값 만들기
function solution(numbers) {
    
    numbers.sort((a,b)=>b-a);
    
    return numbers[0]*numbers[1];
}