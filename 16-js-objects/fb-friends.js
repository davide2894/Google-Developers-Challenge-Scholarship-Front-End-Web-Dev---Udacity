/*
    Programming Quiz: Facebook Friends (7-5)
    
    Directions.
    
    Create an object called facebookProfile. The object should have 3 properties:
    * your name
    * the number of friends you have, and
    * an array of messages you've posted (as strings)
    
    The object should also have 4 methods:
    * postMessage(message) - adds a new message string to the array
    * deleteMessage(index) - removes the message corresponding to the index provided
    * addFriend() - increases the friend count by 1
    * removeFriend() - decreases the friend count by 1
*/

// your code goes here

var facebookProfile = {
    name: "Davide Iaiuese",
    friends: 428,
    messages: ["hello world!", "Batman is cool"],
    
    // add new message string to messages
    postMessage: function(message) {
        facebookProfile.messages.push(message);
        return message;
    },
    
    // remove the message corresponing to the index provided
    deleteMessage : function(index) {
        if(facebookProfile.messages[index]) {
            return facebookProfile.messages.splice(index, 1);
        }
        else {
            return "message not found at the provided index";
        }
    },
    
    // increase friends count by 1
    addFriend: function() {
        facebookProfile.friends++;
    },
    
    // decrease friends count by 1
    removeFriend : function() {
        facebookProfile.friends--;
    }
};

//testing 
console.log("cross fingers...Here we go!");

console.log("name: " + facebookProfile.name); // name: Davide Iaiuese

console.log("friendsCount = " + facebookProfile.friends); // friendsCount = 428

console.log("messages before postMessage: " + facebookProfile.messages); // messages before postMessage: hello world!,Batman is cool

console.log("postMessage: " + facebookProfile.postMessage("this is a new test message at index 2")); // postMessage: this is a new test message at index 2

console.log("messages after postMessage: " + facebookProfile.messages); // messages after postMessage: hello world!,Batman is cool,this is a new test message at index 2


console.log("delete message at index 2", facebookProfile.deleteMessage(2)); // delete message at index 2 [ 'this is a new test message at index 2' ]

console.log("messages after deleting: " + facebookProfile.messages); // messages after deleting: hello world!,Batman is cool

console.log("testing deleteMessage false else{} condition, should give error message-->" + facebookProfile.deleteMessage(2)); // testing deleteMessage false else{} condition, should give error message-->message not found at the provided index


console.log("friends count before adding : " + facebookProfile.friends); // friends count before adding : 428

console.log("calling facebookProfile.addFriend() method...");
facebookProfile.addFriend();

console.log("adding a friend...");


console.log("friends count after adding: " + facebookProfile.friends); // friends count after adding: 429

console.log("friends count before removing : " + facebookProfile.friends); // friends count befire removing: 429

console.log("calling facebookProfile.removeFriend() method...");
facebookProfile.removeFriend();

console.log("removing 1 friend...");

console.log("friends count after removing: " + facebookProfile.friends); // friends count after removing: 429





