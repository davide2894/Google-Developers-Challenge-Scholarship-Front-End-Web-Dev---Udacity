/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x <= 20) {
    // check divisibility
    // print Julia, James, or JuliaJames
    // increment x
    
    // if number is divisible only by 3 
    if( (x % 3 === 0) && (x % 5 !== 0) ) {
        console.log("Julia");
    }
    // if number is divisible only by 5
    else if( (x % 5 === 0) && (x % 3 !== 0) ) {
        console.log("James");
    }
    // if number is divisible by both 3 and 5
    else if( (x % 3 === 0) && (x % 5 === 0) ){
        console.log("JuliaJames");
    }
    // if number is not divisible by 3 or 5 just print it as it is
    else {
        console.log(x);
    }
    // increment number by 1 at each iteration of this while loop
    x++;
}
