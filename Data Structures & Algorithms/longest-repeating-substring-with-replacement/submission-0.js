class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let leftp = 0;
let rightp = 0;

const map = {};
let max = 0;
let result = 0;

while (rightp < s.length) {

    map[s[rightp]] = (map[s[rightp]] || 0) + 1;

    max = Math.max(max, map[s[rightp]]);

    const width = rightp - leftp + 1;

    if (width - max > k) {
        map[s[leftp]]--;
        leftp++;
    }

    result = Math.max(result, rightp - leftp + 1);

    rightp++;
}

return result;
    }
}
