class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    const map = {};
    for (const num of nums) {
        map[num] = (map[num] || 0) + 1;
    }
    // buckets[f] = all numbers that appear exactly f times
    const buckets = Array.from({ length: nums.length + 1 }, () => []);
    
    for (const [num, count] of Object.entries(map)) {
        buckets[count].push(Number(num));
    }
    //console.log(buckets)
    const result = [];
    for (let f = buckets.length - 1; f >= 0 && result.length < k; f--) {
        for (const num of buckets[f]) {
            result.push(num);
            if (result.length === k) break;
        }
    }
    return result;
}
}
