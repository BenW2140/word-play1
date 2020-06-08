$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userSentence = $("input#sentence").val();
    const words = userSentence.split(' ');
    let newSentence = [];
    // console.log(words);
    words.forEach(function(word) {
      if (word.length >= 3) {
        newSentence.push(word);
      }
    });
    newSentence.reverse();
    $("#output").text(newSentence.join(' '));
  });
});