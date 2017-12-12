/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the 
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */

// change the value of `number` to test your if...else statement

var number = 3;

// To check if a given number is even or odd I use modulo "%" operator.
// The remainder operator returns the remainder left over 
// when one operand is divided by a second operand
// See more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#reaminder

// if number is even
if (number % 2 === 0) {
    
    console.log("even");
    
} 
// if not even, the number is odd
else {
    
    console.log("odd");
}
