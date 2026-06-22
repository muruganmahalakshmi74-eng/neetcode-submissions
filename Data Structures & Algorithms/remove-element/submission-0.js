class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let result = []
        for(let i=0;i<nums.length;i++){
            if(nums[i]!==val){
                result.push(nums[i])
            }
        }
        for(let j=0;j<result.length;j++){
            nums[j]=result[j]
        }
        return result.length
    }
}
