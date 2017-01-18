var consonants = ["q", "w", "r", "t", "p", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "Q", "W", "R", "T", "P", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
var vowels = ["e", "u", "i", "o", "a", "E", "A", "I", "O", "U"]
var y = ["y", "Y"]

var translate = function(word) {
  console.log(vowelCheck(word));
  if (vowelCheck(word) === true) {
    return (word + "ay");
  }
  else {
    return (consonantMove(word) + "ay");
  }
}

var vowelCheck = function(word) {
  // check for first character being a vowel
  var vowel = false;
  for(var index = 0; index < vowels.length; index ++) {
    if (vowels[index] === word.charAt(0)) {
      vowel = true;
      return vowel;
    }
  }
  return vowel;
};

var consonantMove = function(word) {
  // takes !! single !! first consonants and moves them to the end of the word
  var wordArray = word.split("");
  wordArray.push(wordArray[0]);
  wordArray.splice(0,1);
  var newWord = wordArray.join("");
  return newWord;
}


$(document).ready(function() {
  $("form#input-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#text-input").val();
    var output = translate(userInput);
    $("#translation").text(output);

  });
});
