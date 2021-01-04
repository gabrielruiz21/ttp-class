function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  let counter = 0;
  nums.map((value,index)=>{
    if(value === index)
      counter++
  })
  return counter;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;