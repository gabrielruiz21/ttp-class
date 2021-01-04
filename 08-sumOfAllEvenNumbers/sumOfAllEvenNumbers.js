function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  let counter =0;
  nums.map((value) => {
    if(value % 2 === 0)
      counter++
  })
  return counter;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;