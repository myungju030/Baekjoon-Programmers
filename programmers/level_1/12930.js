// 이상한 문자 만들기
function solution(s) {
    var answer = '';
    let arr=s.split('');
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(/[a-zA-Z]/.test(s[i]) && count%2===0){
            arr[i] = arr[i].toUpperCase(); count++;
        }else if(/[a-zA-Z]/.test(arr[i]) && count%2===1){
            arr[i] = arr[i].toLowerCase(); count++;
        }else{
            count = 0;
        }
    }
    return arr.join('');
}