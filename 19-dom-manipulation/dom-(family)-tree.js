/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

// Your code goes here!

var family1, family2;

// Select div with id="family1" and store selection
family1 = $("#family1");

// Create div with id="family2" and store selcton 
family2 = "<div id='family2'></div>";

// Insert family2 after family1
$(family2).insertAfter(family1);

// Create family2 content (1 son and two grandchildren) 
// and append it to family2
$("#family2").append("<h1>Family 2</h1>")
.append(
    "<div id='bruce'>"+
    "<h2>Bruce</h2>"+
    "<div id='madison'><h3>Madison</h3></div>"+
    "<div id='hunter'><h3>Hunter</h3></div>"+
    "</div>"
    );

