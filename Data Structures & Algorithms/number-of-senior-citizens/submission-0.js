class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        const result = details.filter((detail)=>{
            return detail.slice(-4,-2) > 60
        })
        return result.length
    }
}
