class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      let isString = (s1)=>s1.split('').sort().join()
      return isString(s)===isString(t)
    }
}
