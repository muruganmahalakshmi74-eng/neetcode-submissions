class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        
        if(s1.length > s2.length) return false
        s1= s1.split('').sort().join('')
        let window = s1.length
        for(let i=0;i<=s2.length-window;i++){
            let sub = s2.slice(i,i+window)
            if(sub.split('').sort().join('')===s1) return true
        }
        return false
    }
   
}
