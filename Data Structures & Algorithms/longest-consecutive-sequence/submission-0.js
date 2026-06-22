class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length===0) return 0
       let numSet = new Set(nums)
       let longestChain =0
       for(let num of numSet){
        if(!numSet.has(num-1)){
            let currNum = num
            let currentChain = 1
            while(numSet.has(currNum+1)){
                currNum+=1
                currentChain+=1
            }

        longestChain = Math.max(longestChain, currentChain)
        }
       }
       return longestChain
    }
}
