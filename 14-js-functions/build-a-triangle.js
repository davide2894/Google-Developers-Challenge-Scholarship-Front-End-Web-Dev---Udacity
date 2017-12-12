/*
    Programming Quiz: Build A Triangle (5-3)

    create a function called buildTriangle() that will accept an input (the triangle at its widest width) and will return the string representation of a triangle. See the example output below.

    buildTriangle(10);
    Returns:

    * 
    * * 
    * * * 
    * * * * 
    * * * * * 
    * * * * * * 
    * * * * * * * 
    * * * * * * * * 
    * * * * * * * * * 
    * * * * * * * * * *
    We've given you one function makeLine() to start with. The function takes in a line length, and builds a line of asterisks and returns the line with a newline character.

    function makeLine(length) {
      var line = "";
      for (var j = 1; j <= length; j++) {
        line += "* "
      }
      return line + "\n";
    }
    You will need to call this makeLine() functin in buildTriangle().
 */

// creates a line of * for a given length

// builds a triangle: argument passed is the height and triangle's widest width
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(size){
    var a = "";
    for(var i=1; i<=size; i++){
        a += (makeLine(i));
    }
    return a;
}
console.log(buildTriangle(10));
/*
    * 
    * * 
    * * * 
    * * * * 
    * * * * * 
    * * * * * * 
    * * * * * * * 
    * * * * * * * * 
    * * * * * * * * * 
    * * * * * * * * * * 
*/

