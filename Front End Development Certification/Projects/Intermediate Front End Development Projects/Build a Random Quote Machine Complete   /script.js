$(document).ready(function () {
    var quotes = [[
      "We cannot deny the facts of nature, but we should certainly try to improve on them." ,
"Mihaly Csikszentmihalyi"],
["You know that children are growing up when they start asking questions that have answers." ,
"John J. Plomp"],
["The art of art, the glory of expression and the sunshine of the light of letters, is simplicity.",
"Walt Whitman"],
["This is the best kind of voyeurism, hearing joy from your neighbors.",
"Chuck Sigars"],
["Nobody in the game of football should be called a genius. A genius is somebody like Norman Einstein." ,
"Joe Theismann"],
["The 'Net is a waste of time, and that's exactly what's right about it.",
"William Gibson"],
["If it weren't for my lawyer, I'd still be in prison. It went a lot faster with two people digging.",
"Joe Martin"],
["It is not a bad idea to get in the habit of writing down one's thoughts. It saves one having to bother anyone else with them.",
"Isabel Colegate"],
["Call home at least once a week. It's a proven fact that we call home less the older we get. And that's wrong. It should be the other way around. As we get older, our parents get older.",
"Randy Pausch"],
["No one can make you feel inferior without your consent.",
"Eleanor Roosevelt"],
["Human beings, by changing the inner attitudes of their minds, can change the outer aspects of their lives.",
"William James"],
["A marriage is always made up of two people who are prepared to swear that only the other one snores.",
"Terry Pratchett"],
["Politics is made up largely of irrelevancies.",
"Dalton Camp"],
["In Kyudo philosophy, you don't aim--you become one with the target. Then, in fact, there's nothing to aim at. I find it works well with women, too. Give it a try.",
"Martin Sage and Sybil Adelman"],
["An author spends months writing a book, and maybe puts his heart's blood into it, and then it lies about unread till the reader has nothing else in the world to do.",
"W. Somerset Maugham"],
["Happiness isn't something you experience; it's something you remember.",
"Oscar Levant"],
["The highest courage is to dare to appear to be what one is.",
"John Lancaster Spalding"],
["When two men in business always agree, one of them is unnecessary.",
"William Wrigley Jr."],
["In all affairs it's a healthy thing now and then to hang a question mark on the things you have long taken for granted.",
"Bertrand Russell"],
["Ah, sweet alcohol. Like a true friend, you replace the anger with better, louder anger.", 
"Randy K. Milholland"]
 ];
  
  var quotesLength = quotes.length;
  
  $("#quote-button").click(function() {
    var randomIndex = Math.floor(Math.random() * quotesLength);
    $(".text-container")
      .html("<span id='quote'>" + quotes[randomIndex][0] + "</span>"+ "<br><span id='author'> - " + quotes[randomIndex][1] + "</span>");
    $(".twitter-container").show();
    var quote =  $(".text-container").text();
    $("a").attr("href", 'https://twitter.com/intent/tweet?text=' + quote);
  }); 
  $("#twitter-button").click(function () {
    $("#twitter-link")[0].click();
  });
});