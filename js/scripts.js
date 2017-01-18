var translate = function(word) {
  return word;
}



$(document).ready(function() {
  $("form#input-form").submit(function(event) {
    event.preventDefault();

    var userInput = $("#text-input").val();
    $("#translation").text(translate(userInput));

  });
});
