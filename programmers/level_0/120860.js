// 직사각형 넓이 구하기
function solution(dots) {
    let x=0;
    let y=0;
    for(let i=1; i<dots.length; i++){
        if(dots[0][0] === dots[i][0]){
          y = dots[0][1] >= dots[i][1] ? dots[0][1] - dots[i][1] : dots[i][1] - dots[0][1];
        }
         if(dots[0][1] === dots[i][1]){
          x = dots[0][0] >= dots[i][0] ? dots[0][0] - dots[i][0] : dots[i][0] - dots[0][0];
        }
    }
    return x*y;
}