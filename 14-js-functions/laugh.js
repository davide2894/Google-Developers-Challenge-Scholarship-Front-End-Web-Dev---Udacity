/*
    Programming Quiz: Laugh (5-4)
 
    Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.
 */

var laugh = function(nOfTimes){
   var ha = "";
   for(var i=0; i<nOfTimes; i++){
       if(i === (nOfTimes-1) ){
          ha += "ha!";
       }
       else{
          ha += "ha"; 
       }
       
   }
   return ha;
};

console.log(laugh(3)); // hahaha!
