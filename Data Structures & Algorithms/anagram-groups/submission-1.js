class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let set1 = new Map()
        for(let i=0;i<strs.length;i++){
            let str = strs[i].split('').sort().join('')
            if(!set1.has(str)){
                set1.set(str,[])
            }
            set1.get(str).push(strs[i])
        }
        return Array.from(set1.values())
    }
}
