function isLetter(char) {
  if(((char >= "a") && (char <= "z")) || ((char >= "A") && (char <= "Z"))) {
    return true;
  }
  return false;
}

function  isVowel(char) {
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "y" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U" || char === "Y") {
    return true;
  }
  return false;
}
