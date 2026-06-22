class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let num = [...nums]
        num.push(...nums)
        return num
    }
}
