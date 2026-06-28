class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestMonotonicSubarray(nums) {
        let longest = 1
        let strict_increasing = 1
        let strict_decreasing = 1
        for(let i=1;i<nums.length;i++){
            if(nums[i]>nums[i-1]) strict_increasing++
            else strict_increasing = 1

            if(nums[i]<nums[i-1]) strict_decreasing++
            else strict_decreasing = 1

            longest = Math.max(longest,strict_increasing,strict_decreasing)
        }
        return longest
    }
}
