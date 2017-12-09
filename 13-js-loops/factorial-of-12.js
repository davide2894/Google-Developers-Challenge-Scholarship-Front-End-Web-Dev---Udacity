/*
 * Programming Quiz: Factorials (4-7)
 * Write a for loop that prints out the factorial of the number 12.
 
 * 12! = 4.790016 E+8

*/

// your code goes here

var solution = 12;

for(var n = 11; n > 1; n--) {
    
    solution *= n;
}
console.log(solution);
