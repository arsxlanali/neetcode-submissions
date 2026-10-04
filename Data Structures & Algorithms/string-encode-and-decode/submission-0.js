class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        for (let i = 0 ; i < strs.length; i++) {
            const len = strs[i].length;
            strs[i] = `${len}#${strs[i]}`
        }
        return strs.join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {   // find the delimiter
                j++;
            }
            const len = parseInt(str.slice(i, j)); // digits before '#'
            const start = j + 1;                    // first char of the content
            result.push(str.slice(start, start + len));
            i = start + len;                        // jump past this chunk
        }
        return result;
    }
}
