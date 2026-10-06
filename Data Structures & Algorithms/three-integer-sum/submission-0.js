class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b);

        const result = []
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            const num = nums[i]
            let leftP= i + 1; 
            let rightP = nums.length  - 1;
            while (leftP < rightP) {
                if (num + nums[leftP] + nums[rightP] === 0) {
                    result.push([num , nums[leftP] , nums[rightP]])
                    leftP++;
                    rightP--;
                    while (leftP < rightP && nums[leftP] === nums[leftP - 1]) {
                        leftP++;
                    }
                    continue;
                }

                if (num + nums[leftP] + nums[rightP] > 0) {
                    rightP--;
                } else {
                    leftP++;
                }

            }
        }

        return result
    }
}
