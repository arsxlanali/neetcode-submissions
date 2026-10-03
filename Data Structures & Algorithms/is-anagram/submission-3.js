class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       const map = {}
       if (s.length != t.length) return false
       for (let i = 0; i < s.length; i++) {
        const ch1 = s[i]
        const ch2 = t[i]
        map[ch1] = (map[ch1] || 0) + 1
        map[ch2] = (map[ch2] || 0) - 1
       }
       for (const [key, count] of Object.entries(map) ) {
        if (count !== 0) return false
       }
       return true
    }

}
