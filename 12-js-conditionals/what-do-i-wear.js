/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 18;
var shirtLength = 28;
var shirtSleeve = 8.13;
var size = "";

// your code goes here

// if the shirt's width, length and sleeve measures is the S range, it must be a S size
if( (shirtWidth >= 18 && shirtWidth < 20) && 
    (shirtLength >= 28 && shirtLength < 29) &&
    (shirtSleeve >= 8.13 && shirtSleeve < 8.38) ) {
      
      size = "S";
      console.log(size);
    }
// if the shirt's width, length and sleeve measures is the M range, it must be a M size
else if( (shirtWidth >= 20 && shirtWidth < 22) && 
    (shirtLength >= 29 && shirtLength < 30) &&
    (shirtSleeve >= 8.38 && shirtSleeve < 8.63) ) {
      
      size = "M";
      console.log(size);
    }
// if the shirt's width, length and sleeve measures is the L range, it must be a L size
else if( (shirtWidth >= 22 && shirtWidth < 24) && 
    (shirtLength >= 30 && shirtLength < 31) &&
    (shirtSleeve >= 8.63 && shirtSleeve < 8.88) ) {
      
      size = "L";
      console.log(size);
    }
// if the shirt's width, length and sleeve measures is the XL range, it must be a XL size
else if( (shirtWidth >= 24 && shirtWidth < 26) && 
    (shirtLength >= 31 && shirtLength < 33) &&
    (shirtSleeve >= 8.88 && shirtSleeve < 9.63) ) {
      
      size = "XL";
      console.log(size);
    }
// if the shirt's width, length and sleeve measures is the 2XL range, it must be a 2XL size
else if( (shirtWidth >= 26 && shirtWidth < 28) && 
    (shirtLength >= 33 && shirtLength < 34) &&
    (shirtSleeve >= 9.63 && shirtSleeve < 10.13) ) {
      
      size = "2XL";
      console.log(size);
    }
// if the shirt's width, length and sleeve measures is the 3XL range, it must be a 3XL size
else if( (shirtWidth >= 28) && 
    (shirtLength >= 34) &&
    (shirtSleeve >= 10.13) ) {
      
      size = "3XL";
      console.log(size);
    }
// in the case none of the above is true 
// it means the shirt's size doesn't fit any acceptable range 
// so we can't assign to any of the size variables (S, M, L, XL, 2XL, 3XL) specified above
else {
      console.log("N/A");
  }