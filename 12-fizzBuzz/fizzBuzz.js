function fizzBuzz(start, end) {
  // Insert code here;
  let counter = start;
  let arr=[];
  while(counter <= end){
    if(counter % 3 === 0 && counter % 5 === 0)
      arr.push("FizzBuzz")
    else if(counter % 3 === 0)
      arr.push("Fizz")
    else if(counter % 5 === 0)
      arr.push("Buzz")
    else
      arr.push(counter)
    
    counter++;
  }

  return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;