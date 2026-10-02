class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    //3 + 4 = 7
    // 3 - 7 = 4
    //{3: 0, 4: 1, 5: 2, 6: 3 }
    twoSum(nums, target) {
    const map = {}; // complement we still need -> index that needs it
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] !== undefined) {   // current value completes an earlier pair
            return [map[nums[i]], i];
        }
        map[target - nums[i]] = i;          // record the complement this value needs
    }
    return [];
}
}
