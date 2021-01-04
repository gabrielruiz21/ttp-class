function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  let counter =0;
  nums.map((value) => {
    if(value >= start && value <= end)
      counter++
  })
  return counter;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;