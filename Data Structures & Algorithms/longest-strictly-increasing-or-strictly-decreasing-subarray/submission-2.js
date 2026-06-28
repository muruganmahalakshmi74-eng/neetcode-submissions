class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestMonotonicSubarray(nums) {
       let longest = 1
       let strict_increase = 1
       let strict_decrease = 1
       for(let i=1;i<nums.length;i++){
        if(nums[i]>nums[i-1]) strict_increase++
        else strict_increase = 1

        if(nums[i]<nums[i-1]) strict_decrease++
        else strict_decrease = 1

        longest = Math.max(longest,strict_increase,strict_decrease)
       }
       return longest
    }
}
