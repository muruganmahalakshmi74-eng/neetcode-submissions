class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = strs.reduce((acc,curr)=>{
           let index = curr.toLowerCase().split('').sort().join('')
           if(!acc[index]) acc[index] = []
           acc[index].push(curr);
           return acc
           
        },{})
        return Object.values(result)
    }
}
