// 시저 암호
function solution(s, n) {
    let lowerArr=[
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
        'p','q','r','s','t','u','v','w','x','y','z'
    ];
    let upperArr = [
       'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
        'P','Q','R','S','T','U','V','W','X','Y','Z'
    ]
    let arr = s.split('')
    for(let i=0; i<arr.length; i++){
        if(arr[i]!==' '){
            if(/[a-z]/.test(arr[i])){
                if(lowerArr.indexOf(arr[i])+n<lowerArr.length){
                   arr[i] =lowerArr[lowerArr.indexOf(arr[i])+n]
                }
                else{
                    arr[i] =lowerArr[lowerArr.indexOf(arr[i])+n-lowerArr.length]
                }
            }
            else{
                if(upperArr.indexOf(arr[i])+n<upperArr.length){
                   arr[i] =upperArr[upperArr.indexOf(arr[i])+n]
                }
                else{
                    arr[i] =upperArr[upperArr.indexOf(arr[i])+n-upperArr.length]
                }
            }
        }
    }
    return arr.join('');
}