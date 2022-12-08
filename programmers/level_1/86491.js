// 최소직사각형
function solution(sizes) {
    var answer = 0;
    for(let i=0; i<sizes.length; i++){
        if(sizes[i][0] < sizes[i][1]){
            sizes[i] =[sizes[i][1], sizes[i][0]];
        }
    }
    let widthMax = sizes.reduce((a,b)=>a[0]>b[0]? a:b)[0];
    let heightMax = sizes.reduce((a,b)=>a[1]>b[1]?a:b)[1];
    return widthMax*heightMax;
}