class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     * bucket {
     *  1: 1,
     *  2: 2,
     *  3: 3
     * 
     * }
     * 
     */
    topKFrequent(nums, k) {
        const count = {};
const bucket = Array.from({ length: nums.length + 1 }, () => []);
const res = [];

for (const num of nums) {
    count[num] = (count[num] || 0) + 1;
}

for (const num in count) {
    const frequency = count[num];
    bucket[frequency].push(Number(num));
}

for (let i = bucket.length - 1; i >= 0; i--) {
    for (const num of bucket[i]) {
        res.push(num);

        if (res.length === k) {
            return res;
        }
    }
}

return res;
    }
}
