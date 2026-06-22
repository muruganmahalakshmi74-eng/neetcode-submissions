class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let result = nums.reduce((acc,curr)=>{
           if(acc > curr){
                acc = curr
           }
           return acc

        },nums[0])
        return result
    }
}
