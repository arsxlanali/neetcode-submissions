class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return "";

    const need = new Map();
    for (const char of t) {
        need.set(char, (need.get(char) || 0) + 1);
    }

    let left = 0;
    let start = 0;
    let minLength = Infinity;
    let matched = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        if (need.has(char)) {
            need.set(char, need.get(char) - 1);

            if (need.get(char) >= 0) {
                matched++;
            }
        }

        while (matched === t.length) {
            const windowLength = right - left + 1;

            if (windowLength < minLength) {
                minLength = windowLength;
                start = left;
            }

            const leftChar = s[left];

            if (need.has(leftChar)) {
                need.set(leftChar, need.get(leftChar) + 1);

                if (need.get(leftChar) > 0) {
                    matched--;
                }
            }

            left++;
        }
    }

    return minLength === Infinity
        ? ""
        : s.substring(start, start + minLength);
    }
}
