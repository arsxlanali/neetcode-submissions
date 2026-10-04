class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const row = Array.from({length: 9}, ()=> new Set())
        const col = Array.from({length: 9}, ()=> new Set())
        const boxes = Array.from({length: 9}, ()=> new Set())
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++ ) {
                const elm = board[r][c]
                if (elm=='.') continue
                const box = Math.floor(r/3) * 3 + Math.floor(c / 3)
                if (row[r].has(elm) || col[c].has(elm) || boxes[box].has(elm)) {
                    return false
                }
                row[r].add(elm)
                col[c].add(elm)
                boxes[box].add(elm)


                
            }
        }
        return true
      
    }
}
