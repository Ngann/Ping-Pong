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

function isConsonant(char) {
  if(isLetter(char) && !isVowel(char)) {
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
  if(isConsonant(firstChar)) {
    return true;
  }
  return false;
}

function moveConsonants(word){
  var wordArray = word.split('');

  for ( var i = 0 ; i < wordArray.length; i++){
    if(isConsonant(wordArray[0])) {
      var firstChar = wordArray.shift();
      wordArray.push(firstChar);
    }
  }

  return wordArray.join("") + "ay" ;
}


function pigLatinWord(word) {
  if (startsWithVowel(word)) {
    return word + "way" ;
  } else if(startsWithConsonant(word)) {
    return moveConsonants(word);
  } else {
    // Add an error case
  }
}
