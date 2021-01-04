function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  let multiplication = 1;
  args.map((number) =>{
    multiplication *= number;
  })
  return multiplication;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;