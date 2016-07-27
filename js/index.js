// This first part calls the random quote api and parses the JSON into 2 ids in my html
function getQuote() {
  $.ajax({
    headers: {
      'X-Mashape-Key': "bs5tdxRryomsh2L4bySgpc6K3kZVp1QHoX9jsn7wZtRfl0YOZV",
      'Content-Type': "application/x-www-form-urlencoded",
      Accept: "application/json"
    },
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
    success: function(response) {
      var quoteData = JSON.parse(response);
      $('#quoteText').text(quoteData.quote);
      $('#quoteAuthor').text(quoteData.author);
    }
  });
}
$(document).ready(function() {
  //The ajax function from above is called below on click
  getQuote();
  $('#get-quote').on('click', getQuote);
  //Tweet function below on click
  $("#tweet-quote").on("click", function() {
    window.open("http://twitter.com/home/?status=" + $("#quoteText").html() + " -" + $("#quoteAuthor").html(), "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=400, height=400");
  });
});