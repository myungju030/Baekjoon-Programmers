// 평행
function solution(dots) {
    var answer = 0;
    let arr = [];
    let gradient = 0;
    for(let i=0; i<dots.length; i++){
        for(let j=i+1; j<dots.length; j++){
            gradient = (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]);
            arr.push(Math.abs(gradient));
        }
    }

    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]===arr[j]){
                return 1;
            }
        }
    }
    
    return 0;
}