$(function() {
  var str = "this is a string of text"; //input text
  var toArray = function(someStr) {
	   return someStr.split(" ");
   }
   var isVowel = function(char1){
     switch (char1.toUpperCase())
      case "A":
      case "E":
      case "I":
      case "O":
      case "U":
      case "Y":
        return true; break;
      default: return false;
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
       default: return str + "ay"
     }
   }


  var test = function(someStr) {
	   var wordArray = toArray(someStr);
     alert(wordArray);
   }
})
