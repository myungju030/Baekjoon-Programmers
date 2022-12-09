// 신규 아이디 추천
function solution(new_id) {
    var answer = '';
    
    new_id = new_id.toLowerCase();
    new_id = new_id.replace(/[^a-z0-9-_.]/g,'');
    new_id = new_id.replace(/[.]+/g, '.');
    new_id = new_id.slice(0,1) === '.'? new_id.slice(1) : new_id;
    new_id = new_id.slice(-1) === '.'? new_id.slice(0,-1) : new_id
    new_id = new_id === '' ?  'a' : new_id;
    new_id = new_id.slice(0,15);
    new_id = new_id.slice(-1) === '.'? new_id.slice(0,-1) : new_id
    if(new_id.length < 3){
        while(new_id.length < 3){
            new_id += new_id[new_id.length-1];
        }
    }
    return new_id;
}