/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression 
// that returns a laugh whose length is the argument passed in

emotions("happy", function(num){
    var ha = "";
    for(var i=0; i<num; i++){
        if(i === (num-1)){
            ha += "ha!";
        }
        else{
            ha += "ha";
        }
    }
    return ha;
});


