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
            for (let c=0; c < 9; c++) {
                const num = board[r][c]
                if (num==".") continue

                const box = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                if (row[r].has(num) || col[c].has(num) || boxes[box].has(num)) {
                    return false
                }
                row[r].add(num)
                col[c].add(num)
                boxes[box].add(num)
            }
        }
        return true
      
    }
}
