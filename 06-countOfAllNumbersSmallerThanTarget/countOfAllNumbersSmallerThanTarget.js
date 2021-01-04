function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  let counter = 0;
  nums.map((value) => {
    if(value<target)
      counter++
  })

  return counter;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;