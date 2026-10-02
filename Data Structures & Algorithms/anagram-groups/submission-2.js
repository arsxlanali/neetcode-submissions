class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // act
    // [0, ]
    groupAnagrams(strs) {
        const group = {}
        for (let str of strs) {
            const count = new Array(27).fill(0);
            for (let chr of str) {
                const asci = chr.charCodeAt(0) - 96
                
                count[asci]++
            }
            const key = count.slice(1,27).join("#")
            if (group[key] !== undefined) {
                group[key] = [...group[key], str]// impovement like use push not create a new array
            } else {
                group[key] = [str]
            }
            
        }
        return Object.values(group)

    }
}
