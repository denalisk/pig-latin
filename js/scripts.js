var consonants = ["q", "w", "r", "t", "p", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "Q", "W", "R", "T", "P", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
var vowels = ["e", "u", "i", "o", "a", "E", "A", "I", "O", "U"]
var y = ["y", "Y"]
var allLegalChars = ["q", "w", "r", "t", "p", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "Q", "W", "R", "T", "P", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M","e", "u", "i", "o", "a", "E", "A", "I", "O", "U","y","Y","'"]

var splitWords = function(aString) {
  var stringArray = aString.split("");
  var state = checkForLetter(stringArray[0]);
  var compositeArray = [];
  var groupedArray = [];
  for (var index = 0; index < stringArray.length; index++) {
    if (checkForLetter(stringArray[index]) === state) {
      groupedArray.push(stringArray[index]);
    }
    else {
      compositeArray.push(groupedArray);
      console.log(groupedArray);
      groupedArray = [];
      groupedArray.push(stringArray[index]);
      state = checkForLetter(stringArray[index]);
    }
  }
  compositeArray.push(groupedArray);
  console.log(compositeStrings(compositeArray));
  return compositeStrings(compositeArray);
}

var compositeStrings = function(compositeArray) {
  var arrayOfWords = [];
  for(var index = 0; index < compositeArray.length; index++) {
    var word = compositeArray[index].join("");
    arrayOfWords.push(word);
  }
  return arrayOfWords;
}

var pigLatinTranslate = function(userInput) {
  var bigArray = splitWords(userInput);
  var bigEmptyArray = [];
  for(var index = 0; index < bigArray.length; index++) {
    var isLetter = checkForLetter(bigArray[index].charAt(0));
    if (isLetter === true) {
      var word = translate(bigArray[index]);
      bigEmptyArray.push(word);
    }
    else {
      bigEmptyArray.push(bigArray[index]);
    }
  }
  return bigEmptyArray.join("");
}

var checkForLetter = function(character) {
  for (var index = 0; index < allLegalChars.length; index++) {
    if (character === allLegalChars[index]) {
      return true;
    }
  }
  return false;
}

var translate = function(word) {
  if (vowelCheck(word.charAt(0)) === true) {
    return (word + "ay");
  }
  else {
    var wordArray = word.split("");
    return (consonantMove(wordArray) + "ay");
  }
}

var vowelCheck = function(letter) {
  // check for first character being a vowel
  var vowel = false;
  for(var index = 0; index < vowels.length; index ++) {
    if (vowels[index] === letter) {
      vowel = true;
      return vowel;
    }
  }
  return vowel;
};

var findFirstVowel = function(wordArray) {
  for(var wordArrayIndex = 0; wordArrayIndex < wordArray.length; wordArrayIndex++) {
    for(var vowelIndex = 0; vowelIndex < vowels.length; vowelIndex ++) {
      if (wordArray[wordArrayIndex] === vowels[vowelIndex] || wordArray[wordArrayIndex] === "y" || wordArray[wordArrayIndex] === "Y") {
        return wordArrayIndex;
      }
    }
  }
  return false;
}

var consonantMove = function(wordArray) {
  // takes first consonants and moves them to the end of the word
  var vowelIndex = findFirstVowel(wordArray);
  console.log(vowelIndex);
  var firstConsonants = (wordArray.splice(0,vowelIndex)).join("");
  if (qChecker(firstConsonants, wordArray) === true) {
    var you = (wordArray.splice(0,1)).join("");
    firstConsonants = firstConsonants + you;
  }
  wordArray.push(firstConsonants);
  var newWord = wordArray.join("");
  return newWord;
}

var qChecker = function(firstConsonants, reducedWordArray) {
  // checks if there is a "qu" in the consonant string, returns false if there is not
  var qCheckIndex = (firstConsonants.length-1);
  if (firstConsonants[qCheckIndex] === "q" || firstConsonants[qCheckIndex] === "Q") {
    if (reducedWordArray[0] === "u" || reducedWordArray[0] === "U") {
      return true
    }
  }
  else {
    return false;
  }
}


$(document).ready(function() {
  $("form#input-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#text-input").val();
    var output = pigLatinTranslate(userInput);
    $("#translation").text(output);

  });
});
