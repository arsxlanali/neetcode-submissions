class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
         if (s1.length > s2.length) return false;

    const map = {};

    for (let i = 0; i < s1.length; i++) {
        map[s1[i]] = (map[s1[i]] || 0) + 1;
    }

    let lp = 0;
    let rp = 0;

    while (rp < s2.length) {

        map[s2[rp]] = (map[s2[rp]] || 0) - 1;

        if (rp - lp + 1 > s1.length) {
            map[s2[lp]]++;
            lp++;
        }

        if (rp - lp + 1 === s1.length) {
            let valid = true;

            for (let i = 0; i < s1.length; i++) {
                if (map[s1[i]] !== 0) {
                    valid = false;
                    break;
                }
            }

            if (valid) return true;
        }

        rp++;
    }

    return false;
    }
}
