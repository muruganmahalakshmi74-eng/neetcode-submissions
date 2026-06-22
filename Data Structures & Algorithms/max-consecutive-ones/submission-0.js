class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
       let result = 0
       for(let i=0;i<nums.length;i++){
        let cnt = 0
        for(let j=i;j<nums.length;j++){
            if(nums[j]===0) break
            cnt++
        }
        result = Math.max(result,cnt)
       }
       return result
    }
}
