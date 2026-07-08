class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length===0) return 0
        // nums.sort((a,b)=>a-b)
        let longest = 0
        let numSet = new Set(nums)
        for(let num of numSet){
            if(!numSet.has(num-1)){
                 let curr = num
            let count = 1
            while(numSet.has(curr+1)){
                curr+=1
                count+=1
            }
            longest = Math.max(longest,count)  
            }
            
        }
        return longest
    }
}
