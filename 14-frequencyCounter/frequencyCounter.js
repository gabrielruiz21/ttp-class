function frequencyCounter(word) {
  // Insert code here;
  let counter = {};
  let array = word.split("");
  array.map((letter) =>{
      if(!(counter[letter])){
          counter[letter] = 1;
      }     
      else
        counter[letter]= counter[letter]+1;
  })
  return counter;
}
// Do not edit this line;
module.exports = frequencyCounter;