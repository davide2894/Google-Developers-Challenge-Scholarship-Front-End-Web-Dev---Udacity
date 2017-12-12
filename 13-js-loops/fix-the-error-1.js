/*
 * Programming Quiz: Fix the Error 1 (4-5)
 */

// fix the for loop
/*
    for (x < 10; x++) {
        console.log(x);
    }
*/

// the error of the loop above is that 
// the for() statement doesn't declare the start condition

// here it is the correct version
for(var x = 5; x < 10; x++)  {
    console.log(x);
}
