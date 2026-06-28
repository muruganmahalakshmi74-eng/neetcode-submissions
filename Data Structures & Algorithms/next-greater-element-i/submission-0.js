class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let result = []
        for(let i=0;i<nums1.length;i++){
                let nextGreater = -1
            for(let j=nums2.length;j>=0;j--){
              if(nums2[j]>nums1[i]){
                nextGreater = nums2[j]
              }
              else if(nums2[j]===nums1[i]) break
            }
            result.push(nextGreater)
        }
        return result
    }
}
