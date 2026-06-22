class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       let keys = {}
       for(let i=0;i<nums.length;i++){
        keys[nums[i]] = (keys[nums[i]] || 0) +1
       }
       let bucket = Array.from({length:nums.length+1},()=>[])
       for(let num in keys){
            let count = keys[num]
            bucket[count].push(Number(num))
       }
       return bucket.flat().reverse().slice(0,k)
        
    }
}
