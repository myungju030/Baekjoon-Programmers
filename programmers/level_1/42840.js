// 모의고사
function solution(answers) {
    var answer = [];
    let one = [1, 2, 3, 4, 5];
    let two = [2, 1, 2, 3, 2, 4, 2, 5];
    let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let num = [0, 0, 0];
    for(let i=0; i<answers.length; i++){
        let a = one.shift();
        let b = two.shift();
        let c = three.shift();
        if(answers[i]===a){
            num[0]++;
        }
        if(answers[i]===b){
            num[1]++;
        }
        if(answers[i]===c){
            num[2]++;
        }
        one.push(a);
        two.push(b);
        three.push(c);
        console.log(`a:${a} b:${b} c:${c}`)
    }
    
   let max = Math.max(...num);
    console.log(`max:${max}`)
    console.log(num.map((el,idx)=>el===max? idx : null))
   return num.map((el,idx)=>el===max? idx+1 : null).filter(x=>x!==null).sort((a,b)=>a-b);
}

