/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
    
    NASA's countdown to launch includes checkpoints where NASA engineers complete certain technical tasks. 
    
    During the final minute, NASA has 6 tasks to complete:
    
    * Orbiter transfers from ground to internal power (T-50 seconds)
    * Ground launch sequencer is go for auto sequence start (T-31 seconds)
    * Activate launch pad sound suppression system (T-16 seconds)
    * Activate main engine hydrogen burnoff system (T-10 seconds)
    * Main engine start (T-6 seconds)
    * Solid rocket booster ignition and liftoff! (T-0 seconds)
    
    NOTE: "T-50 seconds" read as "T-minus 50 seconds".
    
    Your output should look like the following:
    * T-60 seconds
    * T-59 seconds
    * T-58 seconds
    ...
    * T-51 seconds
    * Orbiter transfers from ground to internal power
    * T-49 seconds
    ...
    * T-3 seconds
    * T-2 seconds
    * T-1 seconds
    * Solid rocket booster ignition and liftoff!
    
    Using a while loop, print out the countdown output above.
 */

// your code goes here
var x = 60;

while(x >= 0) {
    if(x === 50) {
        console.log("Orbiter transfers from ground to internal power");
    }
    else if(x === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    }
    else if(x === 16) {
        console.log("Activate launch pad sound suppression system");
    }
    else if(x === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    }
    else if(x === 6) {
        console.log("Main engine start");
    }
    else if(x === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
    }
    else {
        console.log("T-" + x + " seconds");
    }
    x--;
}