class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
      let result = []
      for(let n=0;n<numRows;n++){
        let row=[1]
        let value=1
        for(let k=1;k<=n;k++){
            value = (value*(n-k+1))/k
            row.push(value)
        }
        result.push(row)
      }
      return result
    }

}
