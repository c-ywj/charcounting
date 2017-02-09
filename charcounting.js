function countLetters (str) {
  var myObj = {};
  str = str.replace(/\s/g,'');
  for (var i = 0; i < str.length; i++) {
    if (!myObj[str[i]]) {
      myObj[str[i]] = 1;
    }
    else {
      myObj[str[i]] += 1;
    }
  }
  return myObj;
}

console.log(countLetters('lighthouse in the house'));
