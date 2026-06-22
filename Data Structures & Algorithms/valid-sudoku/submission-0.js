class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let seen = new Set()
        for(let r=0;r<9;r++){
            for(let c=0;c<9;c++){
                let num = board[r][c]
                if(num === ".") continue
                let boxRow = Math.floor(r/3)
                let boxCol = Math.floor(c/3)
                let rowKey = `row_${r}_${num}`
                let colKey = `col_${c}_${num}`
                let boxKey = `box_${boxRow}_${boxCol}_${num}`
                if(seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)){
                    return false
                }
                seen.add(rowKey)
                seen.add(colKey)
                seen.add(boxKey)
            }
        }
        return true
    }
}
