class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
      let maxLength = 0
      let r=0,l=0
      let dist = {}
      for(r=0;r<s.length;r++){
        dist[s[r]] = (dist[s[r]] || 0) + 1//1,1,2
        maxLength = Math.max(maxLength, dist[s[r]])//1,2
        if(r-l+1-maxLength > k){//
            dist[s[l]]--
            l++
        }
      }
      return r-l
    }
}
