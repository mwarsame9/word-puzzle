$(document).ready(function() {
  $('.formInput').submit(function(event) {
    event.preventDefault();

  var sentence = $('#sentence').val();
  var sentenceArray = sentence.split("")
  var vowels = ["a","e","i","o","u"];

  for(var index = 0; index < sentenceArray.length; index+=1){
    for(var bIndex = 0;bIndex < vowels.length ;bIndex+=1){
      if (sentenceArray[index] === vowels[bIndex]) {
         sentenceArray[index] = "-";
        //  sentence = sentence.replace(sentence.charAt(index), "-");
      }
    }
  }

console.log(sentenceArray);
sentence = sentenceArray.join("");
console.log(sentence);
console.log(typeof sentence);

$("#output").text(sentence);
});


});
