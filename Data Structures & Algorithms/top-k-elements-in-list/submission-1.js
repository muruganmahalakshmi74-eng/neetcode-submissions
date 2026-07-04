class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       let map = {}
       for(let num of nums){
        if(!map[num]) map[num]=0
        map[num]++
       }
    //    let res = [...Object.keys(map)].sort((a,b)=>map[b]-map[a]).slice(0,k)
       return [...Object.keys(map)].sort((a,b)=>map[b]-map[a]).slice(0,k)
    }
}
