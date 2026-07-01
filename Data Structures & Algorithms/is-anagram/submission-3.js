class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let isAnagram = (s1)=>s1.split('').sort().join()
        return isAnagram(s)===isAnagram(t)
    }
}
