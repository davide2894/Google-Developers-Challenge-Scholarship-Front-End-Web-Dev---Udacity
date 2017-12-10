/*
    Programming Quiz: Colors of the Rainbow (6-4)
        
    Supposed color order
    var rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
 */

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

/*
    TODO:
    * Remove "Blackberry"
    * Add "Yellow" and "Green"
    * Add "Purple"
*/

// your code goes here

//Removes Blackberry and adds "Yellow", "Green"
//from index 1 onward
rainbow.splice(2, 1, "Yellow", "Green");

// add "Purple" after "Blue"
// index is 5 because it's the new one created to host the new color
rainbow.splice(5, 0, "Purple");

console.log(rainbow);

