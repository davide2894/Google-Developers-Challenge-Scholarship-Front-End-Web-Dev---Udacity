/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = -10;
var checkBalance = false;
var isActive = true;

// your code goes here

// in the case we want to check our balance at the ATM
if(checkBalance) {
    // if account is active and balance is greater than 0
    if (isActive && balance > 0) {
        console.log("Your balance is $" + balance +".");
    } 
    // if account is not active
    else if (!isActive) {
        console.log("Your account is no longer active.");
    } 
    // if account is empty
    else if (balance === 0) {
        console.log("Your account is empty.");
    } 
    // if none of the above conditions is true it means the account is negative
    else {
        console.log("Your balance is negative. Please contact bank.");
    }
}
// in the case we don't want to check our balance at the ATM
else {
    console.log("Thank you. Have a nice day!");
}