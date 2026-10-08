class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums)
        let max = 0;
        for (let num of set) {
            let len = 1; 
           
             if (!set.has(num - 1)) {

        let current = num;
        let len = 1;

        while (set.has(current + 1)) {
            current++;
            len++;
        }

        max = Math.max(len, max);
    }
        }
        return max
   
        
       
    }
}
