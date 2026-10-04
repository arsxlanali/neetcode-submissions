class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let startP = 0;
        let endP = s.length - 1; 
        while (startP <= endP) {
            // 65-90
            // 48-57
            // 97-122 
            let sCh = s[startP].charCodeAt(0);
            const isAlphaNumS =
                (sCh >= 48 && sCh <= 57) ||   // 0-9
                (sCh >= 65 && sCh <= 90) ||   // A-Z
                (sCh >= 97 && sCh <= 122);    // a-z

            // If start character isn't alphanumeric, skip it and restart loop safely
            if (!isAlphaNumS) {
                startP++;
                continue; 
            }

            let eCh = s[endP].charCodeAt(0);
            const isAlphaNumE =
                (eCh >= 48 && eCh <= 57) ||   // 0-9
                (eCh >= 65 && eCh <= 90) ||   // A-Z
                (eCh >= 97 && eCh <= 122);    // a-z

            // If end character isn't alphanumeric, skip it and restart loop safely
            if (!isAlphaNumE) {
                endP--;
                continue;
            }

            // Both are guaranteed to be valid alphanumeric characters here
            if (s[startP].toUpperCase() !== s[endP].toUpperCase()) {
                return false;
            }

            // Move closer if they matched
            startP++;
            endP--;
        }
        return true
    }
}
