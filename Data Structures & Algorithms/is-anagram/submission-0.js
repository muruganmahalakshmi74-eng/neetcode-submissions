class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const resultFunc = (str) => str.toLowerCase().split('').sort().join('')
        return resultFunc(s) === resultFunc(t)
    }
}
