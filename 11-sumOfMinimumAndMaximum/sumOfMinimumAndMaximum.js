function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  let min= nums[0];
  let max = min;
  nums.map((value)=>{
    if(value < min)
      min= value;
    else if(value > max)
      max = value;
  })

  return min+max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;