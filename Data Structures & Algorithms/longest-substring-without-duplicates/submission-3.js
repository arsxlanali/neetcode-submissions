class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length==0) return 0
        if (s.length==1) return 1
        const charset = new Set([s[0]]); 
        let leftp = 0;
        let rightp = 1;
        let size = 0;
        while (rightp !== s.length) {
            //console.log(s[leftp],s[rightp], charset)
            
            if (!charset.has(s[rightp])) {
                charset.add(s[rightp])
                rightp++
            }
            size = Math.max(charset.size, size)
            while (charset.has(s[rightp])) {
                charset.delete(s[leftp])
                leftp++;
            }
            

        }
        return size
    }
}
