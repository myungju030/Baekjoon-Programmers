// A로 B 만들기
function solution(before, after) {
    var answer = 0;
    for(let i=0; i<before.length; i++){
        after = after.replace(before[i],'');
    }

    if(after==='')return 1
    else return 0;
}