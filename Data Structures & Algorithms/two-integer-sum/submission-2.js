class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    //3 + 4 = 7
    // 3 - 7 = 4
    //{4: 0, 3: 1, 2: 2, 1: 3 }
    //num2 = target - nums[i] 
    twoSum(nums, target) {
        const map = {}
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i]
        
            if (map[nums[i]] !== undefined){
                return [map[nums[i]], i]
            }
            map[diff] = i
           
        }
        return []
   
    }
}
