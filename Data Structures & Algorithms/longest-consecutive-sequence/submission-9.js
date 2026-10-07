class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
    let max = 0;

    for (const num of set) {

        // Only start counting if this is
        // the beginning of a sequence
        if (!set.has(num - 1)) {

            let current = num;
            let currentLength = 1;

            while (set.has(current + 1)) {
                current++;
                currentLength++;
            }

            max = Math.max(max, currentLength);
        }
    }

    return max;
        
       
    }
}
