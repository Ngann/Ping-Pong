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
