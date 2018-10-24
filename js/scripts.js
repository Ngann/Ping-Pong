function calculateLeapYear(year) {
  if(year % 400 === 0) {
    return true;
  } else if(year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function(){
  $("#enter").click(function(){

    var yearInput = parseInt($("input#year").val());
    var result = calculateLeapYear(yearInput);

    $(".output").text(result);

  });
});
