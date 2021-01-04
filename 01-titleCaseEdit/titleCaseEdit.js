function titleCaseEdit(title) {
  // Insert code here;
  var words = title.split(" ");
  return words.map((word) => { 
    return word[0].toUpperCase() + word.substring(1); 
  }).join(" ");

}


// Do not edit this line;
module.exports = titleCaseEdit;

// title.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
//  return title;