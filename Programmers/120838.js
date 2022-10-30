//모스부호(1)
// function solution(letter) {
//     var answer = '';
//     let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
//     let arr=letter.split(' ');
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<morse.length; j++){
//             if(arr[i]===morse[j]){
//                 answer = answer + String.fromCodePoint(j+97)
//             }
//         }
        
//     }
//     return answer;
// }

function solution(letter) {
    var answer = '';
    let morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}
    return letter.split(' ').map(x=>morse[x]).join('');
}