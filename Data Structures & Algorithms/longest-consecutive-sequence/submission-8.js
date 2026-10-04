class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        
        const numSet = new Set(nums)
        if (nums.length === 1 || numSet.size ==1) return 1
        console.log(numSet)

        let longest = 0;
        for (let num of numSet) {
            if (!numSet.has(num - 1)) {
                let len = 1; 
                while (numSet.has(num + len)) {
                    len++
                }
                longest = Math.max(len, longest)
            }
        }
        
        return longest
    }
}
