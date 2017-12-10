/*
    Programming Quiz: Quidditch Cup (6-5)
    
    Create a function called hasEnoughPlayers() 
    that takes the team array as an argument 
    and returns true or false 
    depending on if the array has at least seven players.
 */

// your code goes here

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

// return true if team has 7 elements or more, false otherwise
function hasEnoughPlayers(team){
    if(team.length == 7 || team.length > 7) {
        return true;
    }
    else {
        return false;
    }
}

console.log(hasEnoughPlayers(team));
