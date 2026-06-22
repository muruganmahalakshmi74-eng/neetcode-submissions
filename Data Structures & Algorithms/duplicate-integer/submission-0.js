class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let key = {}
    for(let i=0;i<nums.length;i++){
        if(nums[i] in key){
            return true
        }
        key[nums[i]] = nums[i]
    }
    return false
    }
}


