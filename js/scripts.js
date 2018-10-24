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

for (var i= inputArray.lenght -1; i >= 0; i-- ){
  
}

// var num = parseInt(inputArray[i]);
// if(!isBinary(num)) {
//
// if (!isBinary(parseInt(inputArray[i]))) {
