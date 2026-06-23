class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
      
     for(let i=0;i<nums.length;i++){
        let count = nums.reduce((acc,curr)=>{
            return acc + (curr === nums[i] ? 1 : 0)
        },0)
        if(count > Math.floor(nums.length/2)){
            return nums[i]
        }
     }
     return 0
        
    }
}
