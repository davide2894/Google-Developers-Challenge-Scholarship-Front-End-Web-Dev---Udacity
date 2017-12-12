/*
 * Programming Quiz: Fix the Error 2 (4-6)
 */

// fix the for loop

/*
    for (var k = 0 k < 200 k++) {
        console.log(k);
    }
*/

// the error of the loop above is that 
// it lacks semicolons (;) among the conditions of the for() statement

// here is the correct version
for(var k = 0; k < 200; k++) {
    console.log(k);
}