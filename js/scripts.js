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

function moveFirstCharToEnd(array) {
  var moveChar = array.shift();
  array.push(moveChar);

  return moveChar;
}

function moveConsonants(word){
  var wordArray = word.split('');

  var lastCharMoved;

  for ( var i = 0 ; i < wordArray.length; i++){
    if(isConsonant(wordArray[0])) {
      lastCharMoved = moveFirstCharToEnd(wordArray);
    } else if((wordArray[0] == "u") && (lastCharMoved === "q")) {
      moveFirstCharToEnd(wordArray);
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
    console.log("Error: " + word);
  }
}

function pigLatin(sentence) {
  var latinWords = [];
  var words = sentence.split(" ");

  words.forEach(function(word){
    latinWords.push(pigLatinWord(word));
  });
  
  return latinWords.join(' ');
}
