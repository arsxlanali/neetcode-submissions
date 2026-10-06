class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let totalcap = 0;
        let max = 0; 
        const maxleft = new Array(height.length).fill(0);
        const maxright = new Array(height.length).fill(0);
        for (let i = 1; i < height.length; i++) {
            max = Math.max(max, height[i - 1]) 
            maxleft[i] = max
        }
        max = 0; 
        for (let i = height.length - 2; i >= 0; i--) {
            max = Math.max(max, height[i + 1])
            maxright[i] = max
        }
        for (let i = 0; i < height.length ; i++) {
            const cap = Math.min(maxleft[i], maxright[i]) - height[i] 
            if (cap > 0) {
                totalcap += cap;
            }
        }
        return totalcap;
    }
}
