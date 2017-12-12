/*
 * Programming Quiz: Laugh (5-4)
 */

// function expression stored in variable laugh
// that return a laughter string whose length is the passed argument
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

// prints the laughter 
console.log(laugh(3));
