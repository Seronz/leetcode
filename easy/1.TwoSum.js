var twoSum = function(nums, target) {
    let arr = new Array()
    
    for(let i = 0 ; i <= nums.length-1; i++){
        for (let j = i + 1; j <= nums.length; j++){
            if(nums[i] + nums[j] == target){
                arr.push(i)
                arr.push(j)
                return arr
            } 
        }
      
    }    
};