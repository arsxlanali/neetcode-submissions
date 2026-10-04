class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    /*
        nums = [1,2,4,6]
        prefix = [1, 1, 2, 8]
        postfix = [48, 24, 6, 1]


    */
    productExceptSelf(nums) {
      
        //const sufix = [nums[nums.length - 1]]

        const prefix = [];
        const postfix = [];
        const reuslt = [];
        prefix[0] = 1;                 // nothing to the left of index 0
        for (let i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1];
        }

        postfix[nums.length - 1] = 1;                
        for (let i = nums.length - 2; i >= 0; i--) {
            postfix[i] = postfix[i + 1] * nums[i + 1];
        }

        for (let i = 0; i < nums.length; i++) {
            reuslt[i] = postfix[i] * prefix[i]
        }
        return reuslt;
       

    }
}
