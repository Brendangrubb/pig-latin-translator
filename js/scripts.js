$(function() {
  //var str = "this is a string of text"; //input text
  var toArray = function(someStr) {
    return someStr.split(" ");
  }
  var string = "what";
  var isVowel = function(char1) {
    switch (char1.toUpperCase()) {
      case "A":
      case "E":
      case "I":
      case "O":
      case "U":
      case "Y":
        return true;
        break;
      default:
        return false;
    }
  }
  var addAy = function(str) {
    switch (str.slice(-1)) {
      case "!":
      case ".":
      case ",":
      case ";":
      case "?":
      case ":":
        var str1 = str.substring(0, str.length - 1);
        return str1 + "ay" + str.slice(-1);
        break;
      default:
        return str + "ay"
    }
  }

  var moveConsonant = function(str) {
    var exitCounter = 0;
    var firstVowel = 0;
    var str1 = "";

    switch (str.slice(-1)) {
      case "!":
      case ".":
      case ",":
      case ";":
      case "?":
      case ":":
        str1 = str.slice(-1);
        str = str.substring(0, str.length - 1);
        break;
      default:
    }
    while (exitCounter === 0 && firstVowel < str.length) {
      if (isVowel(str.charAt(firstVowel)) && str.charAt(0) !== "y" && str.charAt(0) !== "Y") {
        //return addAy(str);
        exitCounter++;
      } else {
        firstVowel++;
        //alert(firstVowel);
      }

    }
    var subStr1 = str.substring(0, firstVowel);
    var subStr2 = str.substring(firstVowel);
    return subStr2 + subStr1 + str1;

  }
  var test = function(someStr) {
    var wordArray = toArray(someStr);
    //alert(wordArray);
  }


  $("#pig-latin-input").submit(function(event) {
    event.preventDefault();
    var userInput = $("#user-input").val();
    //alert(userInput);
    $("#output-text").text(addAy(moveConsonant(userInput)));

    $("#output-text").show()
  })


});


//  alert(addAy(moveConsonant("#user-input")));
