// 폰켓몬
function solution(nums) {
    var answer = 0;
    let obj ={};
    for(let i=0; i<nums.length; i++){
        if(obj[nums[i]]===undefined) {
            obj[nums[i]] = 1
        }
        else{
            obj[nums[i]] += 1;    
        }
    }
    if(Object.keys(obj).length > nums.length/2) return nums.length/2;
    else return Object.keys(obj).length
    return obj;
}