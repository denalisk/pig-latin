var consonants = ["q", "w", "r", "t", "p", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "Q", "W", "R", "T", "P", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
var vowels = ["e", "u", "i", "o", "a", "E", "A", "I", "O", "U"]
var y = ["y", "Y"]


var translate = function(word) {
  return (word + "ay");
}



$(document).ready(function() {
  $("form#input-form").submit(function(event) {
    event.preventDefault();

    var userInput = $("#text-input").val();
    $("#translation").text(translate(userInput));

  });
});
