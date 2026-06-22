class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       let seen = new Set()
       let left = 0
       let maxLength = 0
       for(let right=0;right<s.length;right++){
        while(seen.has(s[right])){
            seen.delete(s[left])
            left++ //1,2
        }
        seen.add(s[right])//y,z,x
        maxLength = Math.max(maxLength,right-left+1)//1,2,3,3,2
       }
       return maxLength
    }
}
