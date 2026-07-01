class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let seen = new Map()
        for(let i=0;i<strs.length;i++){
            let curr= strs[i].split('').sort().join()
            if(!seen.has(curr)){
                seen.set(curr,[])
            }
            seen.get(curr).push(strs[i])
        }
        return Array.from(seen.values())
    }
}
