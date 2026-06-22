class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
       let encoded = ""
       for(let char of strs){
        encoded+=`${char.length}#${char}`
       }
       return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = []
        let i=0
        while(i<str.length){
            let decode_string = str.indexOf("#",i)
            let length = Number(str.substring(i,decode_string))
            i = decode_string + 1
            let word = str.substring(i,i+length)
            decoded.push(word)
            i+=length
        }
        return decoded
    }
}
