class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sortStr = (s1)=> s1.split('').sort().join()
        return sortStr(s)===sortStr(t)
    }
}
