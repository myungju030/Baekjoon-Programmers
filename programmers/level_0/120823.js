const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//직각삼각형 출력하기
let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let answer='';
    for(let i=1; i<=Number(input[0]); i++){
        let s='';
        for(let j=0; j<i; j++){
            s = s+ '*';
        }
        answer = answer + s + '\n'
    }

    console.log(answer);
    
});


