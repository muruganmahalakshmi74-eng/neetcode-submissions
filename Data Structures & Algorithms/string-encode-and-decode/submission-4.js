class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
      let result = ""
      for(let str of strs){
        result += `${str.length}#${str}`
      }
      return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
      let result = []
      let i=0
      while(i<str.length){
        let pos = str.indexOf("#",i)//1,9
        let len = parseInt(str.slice(i,pos))//5,5
        i = pos+1//2
        let s = str.slice(i,i+len)
        result.push(s)
        i = i + len

      }
      return result
    }
}
