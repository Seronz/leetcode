/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // [1]
    // nums.sort((a,b)=> a-b)
    // for (let i = 0 ;i<nums.length-1;i++){
    //     if (nums[i+1] - nums[i] > 1){
    //         return nums[i]+1
    //     }
    // }
    // if (nums[nums.length-1] !== nums.length) return nums.length
    // if (nums[0] !== 0) return 0

    // [2]
    let total = (nums.length * (nums.length+1))/2
    let sum = nums.reduce((a,b)=> a+b,0)
    return total-sum
};