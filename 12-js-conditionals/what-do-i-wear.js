/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 18;
var shirtLength = 28;
var shirtSleeve = 8.13;
var size = "";
// your code goes here
if( (shirtWidth >= 18 && shirtWidth < 20) && 
    (shirtLength >= 28 && shirtLength < 29) &&
    (shirtSleeve >= 8.13 && shirtSleeve < 8.38) ) {
      
      size = "S";
      console.log(size);
  }
else if( (shirtWidth >= 20 && shirtWidth < 22) && 
    (shirtLength >= 29 && shirtLength < 30) &&
    (shirtSleeve >= 8.38 && shirtSleeve < 8.63) ) {
      
      size = "M";
      console.log(size);
  }
else if( (shirtWidth >= 22 && shirtWidth < 24) && 
    (shirtLength >= 30 && shirtLength < 31) &&
    (shirtSleeve >= 8.63 && shirtSleeve < 8.88) ) {
      
      size = "L";
      console.log(size);
  }
else if( (shirtWidth >= 24 && shirtWidth < 26) && 
    (shirtLength >= 31 && shirtLength < 33) &&
    (shirtSleeve >= 8.88 && shirtSleeve < 9.63) ) {
      
      size = "XL";
      console.log(size);
  }
else if( (shirtWidth >= 26 && shirtWidth < 28) && 
    (shirtLength >= 33 && shirtLength < 34) &&
    (shirtSleeve >= 9.63 && shirtSleeve < 10.13) ) {
      
      size = "2XL";
      console.log(size);
  }
else if( (shirtWidth >= 28) && 
    (shirtLength >= 34) &&
    (shirtSleeve >= 10.13) ) {
      
      size = "3XL";
      console.log(size);
  }
else {
      console.log("N/A");
  }