// 겹치는 선분의 길이
function solution(lines) {
    var answer = 0;
    let start = 0;
    let end = 0;
    let max=0;
    let min=0;
    let arr=[];
    for(let i=0; i<lines.length-1; i++){
        for(let j=i+1; j<lines.length; j++){
            if(lines[i][1] > lines[j][0] && lines[i][0] < lines[j][1]){
                start = lines[i][0] >= lines[j][0] ? lines[i][0] : lines[j][0];
                end = lines[i][1] <= lines[j][1] ? lines[i][1] : lines[j][1];
                answer += end-start;
                arr.push([start,end])  
                console.log(`${end} - ${start}`)
                console.log(arr)
            }
        }
    }
    
   for(let i=0; i<arr.length-1; i++){
            if(arr[i][1] > arr[i+1][0] && arr[i][0] < arr[i+1][1]){
                start = arr[i][0] >= arr[i+1][0] ? arr[i][0] : arr[i+1][0];
                end = arr[i][1] <= arr[i+1][1] ? arr[i][1] : arr[i+1][1];
                answer -= end-start;
                console.log(`${end} - ${start}`)
            }
    }

    return answer;
}