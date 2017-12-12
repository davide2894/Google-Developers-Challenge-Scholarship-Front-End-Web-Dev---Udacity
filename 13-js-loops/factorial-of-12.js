/*
 * Programming Quiz: Factorials (4-7)
 */

/*
    12! = 4.790016 E+8
*/

// your code goes here

var solution = 12;


// 12 * 11!
for(var n = 11; n > 1; n--) {
    
    // 12*11*10*...n-1*1
    solution *= n;
}
console.log(solution);
