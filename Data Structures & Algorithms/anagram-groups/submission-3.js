class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // act
    // [0, ]
    groupAnagrams(strs) {
        const map = {}
        for (let str of strs) {
            const array = new Array(26).fill(0) 
            for (let i= 0; i < str.length; i++) {   
                const asci = str[i].charCodeAt(0) - 97;
                array[asci] += asci + 1                
            }
            const key = array.join("#");

            (map[key] ||= []).push(str);

            //console.log("asic", map)
        }
        return Object.values(map)
    }
}
