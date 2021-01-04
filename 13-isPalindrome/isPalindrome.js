function isPalindrome(word) {
  // Insert code here;
  let equal = true;
  for(var i = 0, j = word.length - 1; i<=j; i++, j-- ){
    if(word[i] === word[j] && equal){      
      continue;
    }      
    else{
      equal = false;
      break;
    }
  }
  return equal;
}

// Do not edit this line;
module.exports = isPalindrome;