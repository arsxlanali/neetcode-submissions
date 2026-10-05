class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let sP = 0;
        let eP = numbers.length - 1;

        while (sP<eP) {

            if (numbers[sP] + numbers[eP] == target) {
                return [sP +1, eP+1]
            }

            if (numbers[sP] + numbers[eP] < target) {

                sP++;

            } else {
                eP--;
            }

            
            
        }
        return []
    }
}
