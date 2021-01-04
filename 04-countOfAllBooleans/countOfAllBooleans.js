function countOfAllBooleans(arr) {
  // Insert code here;
  let counter =0;
  arr.map((value) => {
      if(typeof value === "boolean")
        counter++;
  })
  return counter;
}

// Do not edit this line;
module.exports = countOfAllBooleans;