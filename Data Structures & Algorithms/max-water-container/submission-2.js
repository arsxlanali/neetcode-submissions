class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxHeight = 0;
        while(left < right) {
            const minLength = Math.min(heights[left], heights[right])
            const width =  (right - left);

            maxHeight = Math.max(maxHeight, minLength * width);
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
            
            
        }
        return maxHeight;
    }
}
