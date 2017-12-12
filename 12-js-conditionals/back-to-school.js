/*
 * Programming Quiz: Back to School (3-9)
 */

// change the value of `education` to test your code
var education = "a Doctoral degree";

// set the value of this based on a person's education
var salary;

// your code goes here

// this switch statement won't fall-through because each case uses "break"
// in other words, if one of the following conditions is satifsied the loop stops
switch(education) {
    case "no high school diploma":
        salary = 25636;
        break;
    
    case "a high school diploma":
        salary = 35256;
        break;
        
    case "an Associate's degree":
        salary = 41496;
        break;
    
    case "a Bachelor's degree":
        salary = 59124;
        break;
    
    case "a Master's degree":
        salary = 69732;
        break;
        
    case "a Professional degree":
        salary = 89960;
        break;
    
    case "a Doctoral degree":
        salary = 84396;
        break;
}

// print a string containing the loop's output (one of the 7 cases of the switch statement)
console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString() + "/year.");