// 소수 만들기
function solution(nums) {
    let arr = [];
    for(let i=0; i<nums.length-2; i++){
        for(let j=i+1; j<nums.length-1; j++){
            for(let z=j+1; z<nums.length; z++){
                arr.push(nums[i]+nums[j]+nums[z]);
            }
        }
    }
    let count=0,answer=0;
    for(let i=0; i<arr.length; i++){
        count = 0;
        for(let j=2; j<=Math.sqrt(arr[i]); j++)
        {
            if(arr[i]%j===0){
                count++;
                break;
            }
        }
        if(count===0){
            answer++;
        }
    }
    return answer;
}
