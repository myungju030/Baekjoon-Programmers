// 문자열 내 마음대로 정렬하기
function solution(strings, n) {
    var answer = [];
    let obj;
    for(let i=0; i<strings.length; i++){
        obj = {};
        obj.index = strings[i][n];
        obj.str = strings[i];
        answer.push(obj)
    }
    
    answer.sort((a,b)=> a.index < b.index? -1 : a.index > b.index? 1 : 0);
    // 같은 문자는 문자열로 정렬
    answer.sort((a,b)=> a.index === b.index ? a.str < b.str ? -1: 1 : 0);
    
    return answer.map(x=>x.str);
}