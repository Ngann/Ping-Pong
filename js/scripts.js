var binary = "100001";
var binaryArray = binary.split('');

function isBinary(input){
  if (input === 0 || input === 1){
    return true;
  }
  return false;
}

function isInputBinary(inputArray){
  for (var i = 0; i < inputArray.length; i++ ){
    if (!isBinary(parseInt(inputArray[i]))) {
      return false;
    }
  }
  return true;
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


$(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var sentence = $("#sentence").val();
    $("#output").text(pigLatin(sentence));
  })
})
