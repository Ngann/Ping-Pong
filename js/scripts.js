function isLetter(char) {
  if(((char >= "a") && (char <= "z")) || ((char >= "A") && (char <= "Z"))) {
    return true;
  }
  return false;
}

function isVowel(char) {
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "y" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U" || char === "Y") {
    return true;
  }
  return false;
}

function startsWithVowel(word) {
  if(isVowel(word.charAt(0))) {
    return true;
  }
  return false;
}

function startsWithConsonant(word){
  var firstChar = word.charAt(0);
  if(isLetter(firstChar) && !isVowel(firstChar)) {
    return true;
  }
  return false;
}

function pigLatinWord(word) {
  if (startsWithVowel(word)) {
    return word + "way" ;
  } else if(startsWithConsonant(word)) {
  } else {
  }
}
