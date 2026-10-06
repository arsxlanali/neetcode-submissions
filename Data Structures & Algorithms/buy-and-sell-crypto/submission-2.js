class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
         let leftp = 0; 
        let rightp = 1;
        let max = 0; 
        while (rightp !== prices.length) {
            const profit = prices[rightp] - prices[leftp]
            max = Math.max(max, profit)
            if (prices[leftp] > prices[rightp]) {
                leftp = rightp
                rightp++;
            } else {
                rightp++
            }
        }
        return max
    }
}
